module Helpers

  BASE_PATH = "https://www.officialcharts.com/charts/singles-chart/"

  def set_chart
    @date = params[:id]
    @chart = Chart.where("DATE(?) BETWEEN start_date AND end_date", @date).first
    @date = @date.split("-").reverse.join("-")
  end

  def set_birthday
    @date = params[:id].split("-").reverse.join("-")
    @birthday = Birthday.find_by(date: @date)
  end

   ##helper method to set date to work with url
   def date_to_url(date)
    adjusted_date = date.split("-").reverse.join("")
    @url = BASE_PATH + adjusted_date
  end

  def birthday_dates(dob)
    anniversaries = []
    start_date = dob.split("-")
    this_year = Time.now.strftime("%Y").to_i

    until start_date[2].to_i == this_year
      anniversaries << start_date.join("-")
      start_date[2] = start_date[2].to_i + 1
    end
    anniversaries
  end

  def find_spotify_details(name)
    track = RSpotify::Track.search(name)
  end
  
end