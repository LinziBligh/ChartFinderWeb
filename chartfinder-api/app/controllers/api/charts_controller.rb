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
      ##start to scrape it and add to database (need date)
      date_to_url(@date)
      scrape(@url)
      render json:{message: "cant find that one, we'll have to look it up for you.."}, status: 400
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

    def make_songs
      @song_array = scrape(@url)
      puts @song_array
    end

    def scrape(url)
      html = open(url)
      doc = Nokogiri::HTML(html)
      songs = doc.css("table.chart-positions div.track")
      song_array = []
        
        songs.each do |song|
        new_hash = {}
        new_hash[:name] = song.css(".title a").text.split.map(&:capitalize).join(' ')
        new_hash[:artist] = song.css(".artist a").text.split.map(&:capitalize).join(' ')
        ##new_hash[:label] = song.css(".label").text.split.map(&:capitalize).join(' ')
        new_hash[:img_url] = song.css(".cover img").attribute("src").value
     
     
        song_array << new_hash
        end
        puts song_array
    end




end