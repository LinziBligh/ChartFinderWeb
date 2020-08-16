require 'open-uri'

class Api::BirthdaysController<ApplicationController
before_action :set_birthday, only: [:show, :edit, :destroy]

  
#route not being used
def index
    birthdays=Birthday.all
    render json: ChartSerializer.new(birthdays).to_serialized_json 
  end
#using same serialiser, maybe could rename to something generic?

 
def show
    if @birthday
     render json: ChartSerializer.new(@birthday).to_serialized_json
    else
      birthday = Birthday.create(date: @date, country: "UK")
      birthday_dates(@date).each{|date|
      date_to_url(date)
      song = scrape(@url)
      make_song(song, birthday)
      birthday.save
    }
      end

      @birthday = Birthday.find_by(date: @date)
      render json: ChartSerializer.new(@birthday).to_serialized_json
      
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

    def birthday_dates(dob)
      anniversaries=[]
      start_date = dob.split("-")
      this_year = Time.now.strftime("%Y").to_i

      until start_date[2].to_i == this_year
        anniversaries<<start_date.join("-")
        start_date[2] = start_date[2].to_i+1
      end
      anniversaries
    end

    ##helper method to set date to work with url
    def date_to_url(date)
      adjusted_date = date.split('-').reverse.join("")
      @url = BASE_PATH + adjusted_date
    end


    def scrape(url)
      html = open(url)
      doc = Nokogiri::HTML(html)
      song = doc.css("table.chart-positions div.track")[0]
      

        number_one = {}
        number_one[:name] = song.css(".title a").text.split.map(&:capitalize).join(' ')
        number_one[:artist] = song.css(".artist a").text.split.map(&:capitalize).join(' ')
        number_one[:label] = song.css(".label").text.split.map(&:capitalize).join(' ')
        number_one[:img_url] = song.css(".cover img").attribute("src").value
        number_one[:position] = 1
        
        
        track = find_spotify_details(number_one[:name])
    
       
        if track.first 
          number_one[:spotify_id]=track.first.id 
          number_one[:img_url] = track.first.album.images.first["url"]
        else
         number_one[:spotify_id]= ""
        end
        number_one
    end

    def find_spotify_details(name)
        track = RSpotify::Track.search(name)
    end

    def make_song(song, birthday)
        @song = birthday.songs.build(song)
        @song.save
    end




end