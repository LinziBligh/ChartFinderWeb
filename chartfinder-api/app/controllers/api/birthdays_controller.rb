require 'open-uri'

class Api::BirthdaysController<ApplicationController
before_action :set_birthday, only: [:show, :edit, :destroy]

  def index
    birthdays=Birthday.all
    render json: ChartSerializer.new(birthdays).to_serialized_json 
  end
#using same serialiser, maybe could rename to something generic?

  def show
    if @birthday
     render json: ChartSerializer.new(@birthday).to_serialized_json
    else
      date_to_url(@date)
      songs = scrape(@url)
      birthday = Birthday.create(date: @date, country: "UK")
      birthday.save
      ##for each song in songs, make it a new song object and pushit into chart.
      make_songs(songs, birthday)
      render json: ChartSerializer.new(birthday).to_serialized_json
    end
  end


  #not being used at the moment
  def create
    birthday=Birthday.new(birthday_params)
    if chart.save
      render json: chart
    else
      render json:{message: chart.errors}, status: 400
    end
  end

  def destroy 
    if @chart.destroy
      render status:204
    else
      render json:{message: "Unable to remove this chart"}, status: 400
    end
  end

    private

    BASE_PATH = "https://www.officialcharts.com/charts/singles-chart/"

    def birthday_params
      params .require(:birthday).permit(:date, :country, :songs)
    end

    ##helper method to flip date and set chart
    def set_birthday
      @date = params[:id].split("-").reverse.join("-")
      @birthday = Birthday.find_by(date: @date)
      
    end

    ##helper method to set date to work with url
    def date_to_url(date)
      adjusted_date = date.split('-').reverse.join("")
      @url = BASE_PATH + adjusted_date
    end


    def scrape(url)
      html = open(url)
      doc = Nokogiri::HTML(html)
      songs = doc.css("table.chart-positions div.track")
      @song_array = []

        position = 1
        songs.each do |song|
        new_hash = {}
        new_hash[:name] = song.css(".title a").text.split.map(&:capitalize).join(' ')
        new_hash[:artist] = song.css(".artist a").text.split.map(&:capitalize).join(' ')
        new_hash[:label] = song.css(".label").text.split.map(&:capitalize).join(' ')
        new_hash[:img_url] = song.css(".cover img").attribute("src").value
        new_hash[:position] = position
        position=position+1
        
        track = find_spotify_details(new_hash[:name])
    
       
        if track.first 
          new_hash[:spotify_id]=track.first.id 
          new_hash[:img_url] = track.first.album.images.first["url"]
        else
         new_hash[:spotify_id]= ""
        end

        @song_array << new_hash
        end
        @song_array = @song_array.first(40)
    end

    def find_spotify_details(name)
        track = RSpotify::Track.search(name)
    end

    def make_songs(songs, birthday)
      songs.each do |song|
        @song = birthday.songs.build(song)
        @song.save
      end
    end




end