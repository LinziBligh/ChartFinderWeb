require 'open-uri'

class Api::ChartsController<ApplicationController
before_action :set_chart, only: [:show, :edit, :destroy]

  def index
    charts=Chart.all
    render json: ChartSerializer.new(charts).to_serialized_json
  end

  def show
    if @chart
     render json: ChartSerializer.new(@chart).to_serialized_json
    else
      date_to_url(@date)
      songs = scrape(@url)
      chart = Chart.create(date: @date, country: "UK")
      chart.save
      ##for each song in songs, make it a new song object and pushit into chart.
      make_songs(songs, chart)
      render json: ChartSerializer.new(chart).to_serialized_json
    end
  end

  def create
    chart=Chart.new(chart_params)
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

    def chart_params
      params .require(:chart).permit(:date, :country, :songs)
    end

    ##helper method to flip date and set chart
    def set_chart
      @date = params[:id].split("-").reverse.join("-")
      @chart = Chart.find_by(date: @date)
      
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
        
        songs.each do |song|
        new_hash = {}
        new_hash[:name] = song.css(".title a").text.split.map(&:capitalize).join(' ')
        new_hash[:artist] = song.css(".artist a").text.split.map(&:capitalize).join(' ')
        ##new_hash[:label] = song.css(".label").text.split.map(&:capitalize).join(' ')
        new_hash[:img_url] = song.css(".cover img").attribute("src").value
     
     spotify_image(new_hash[:name])
        @song_array << new_hash
        end
        @song_array
    end

    def spotify_image(name)
      search_title= name.gsub(" ", "%20").downcase
      connection = Excon.new("https://api.spotify.com/v1/search?q=#{search_title}&type=track", headers: {Authorization: 
       "Bearer BQAXFphiffocSuAGU6-tLAg3KraUJ9n4QbmNwFb__CzUyI_b7ne2BrJjHj6WHZU2WsiAbHVDtCn986400pdHh0mNlKlOKX4WFaTTpakEwKCYDpuyajB_FyyoTk0PxrStmC69Eb-smQjREDzul5QaIA"})
      get_response = connection.get
      puts get_response.body
    end

    def make_songs(songs, chart)
      songs.each do |song|
        @song = chart.songs.build(song)
        @song.save
      end
    end




end