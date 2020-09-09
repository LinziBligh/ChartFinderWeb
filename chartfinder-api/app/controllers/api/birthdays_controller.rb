require "open-uri"
include Helpers

class Api::BirthdaysController < ApplicationController
  before_action :set_birthday, only: [:show]

  def show
    if @birthday #if it already exists in the database, render it as JSON
      render json: ChartSerializer.new(@birthday).to_serialized_json
    else # otherwise make a new Birthday instance
      new_birthday = Birthday.create(date: @date, country: "UK")

      birthday_dates(@date).each { |date|
        date_reversed = date.split("-").reverse.join("-")
        found_chart = Chart.where("DATE(?) BETWEEN start_date AND end_date", date_reversed).first
        if found_chart
          new_birthday.songs << found_chart.songs.first
        else
          date_to_url(date)
          song = Song.create(scrape(@url, date))
          new_birthday.songs << song
        end
      }
      new_birthday.save
      render json: BirthdaySerializer.new(new_birthday).to_serialized_json
    end
  end

  private 


  def scrape(url, date)
    html = open(url)
    doc = Nokogiri::HTML(html)
    song = doc.css("table.chart-positions div.track")[0]
    year = date.split("-")[2]

    number_one = {}
    number_one[:name] = song.css(".title a").text.split.map(&:capitalize).join(" ")
    number_one[:artist] = song.css(".artist a").text.split.map(&:capitalize).join(" ")
    number_one[:label] = song.css(".label").text.split.map(&:capitalize).join(" ")
    number_one[:img_url] = song.css(".cover img").attribute("src").value
    number_one[:position] = 1
    number_one[:year] = year

    track = find_spotify_details(number_one[:name])
    if track.first
      number_one[:spotify_id] = track.first.id
      number_one[:img_url] = track.first.album.images.first["url"]
    else
      number_one[:spotify_id] = ""
    end
    number_one
  end

end
