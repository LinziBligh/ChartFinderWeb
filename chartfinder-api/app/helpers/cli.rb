Module CliHelper
  def call
    welcome
    @chosen_date = gets.strip
    
    make_songs
    @chart = ChartFinder::Song.all
    list_songs
    menu
    goodbye
  end
  
  def welcome
    puts ""
    puts "*************************************************"
    puts "*                                               *"
    puts "*          Welcome to ChartFinder!              *"
    puts "*                                               *"
    puts "*************************************************"
    puts ""
    puts "Please enter the date of the official UK singles chart that you would like to see, (DD/MM/YYYY). (Earliest available date is 14/11/1952)"
  end
  
 
  
  

  
   def make_songs
    song_array = ChartFinder::Scraper.scrape(@url)
    ChartFinder::Song.create_from_collection(song_array)
  end
  
    
  def list_songs
    puts ""
    puts "Here is the official UK chart for #{@chosen_date}"
    puts ""
    puts "****************************************************************"
    
    @chart.each.with_index do |song, index|
      puts "#{index + 1}. #{song.title} - #{song.artist} "
    end
    puts "****************************************************************"
    puts ""
end

 def chosen_song_display(chosen_song)
   puts ""
      puts "***************************************************************"
      puts "Title: #{chosen_song.title}"
      puts "Artist: #{chosen_song.artist}"
      puts "Record Label: #{chosen_song.label}"
      puts "Artwork Link: #{chosen_song.coverlink}"
      puts "***************************************************************"
      puts ""
    end
  
  
 
 
  def menu
    input = nil
   
    while input != "exit"
      puts "Please enter the number of the song that you would like more information about, type chart to see the chart again or type exit to end"
   
      input = gets.strip.downcase
   
    if input == "exit"
      break
    elsif input == "chart"
      list_songs
    elsif input.to_i > 0 && input.to_i <= @chart.length
      chosen_song_display(@chart[input.to_i-1])
    elsif input.to_i <= 0 || input.to_i > @chart.length
      puts "Invalid choice, please choose a song number between 1 and #{@chart.length}"
      puts ""
    else
       end
    end
  end
  
  def goodbye
    puts "Thanks for using Chart Finder! Goodbye!"
  end
 
end