class Scraper

  def self.scrape(url)
    html = open(url)
    doc = Nokogiri::HTML(html)
    songs = doc.css("table.chart-positions div.track")
    song_array = []
      
      songs.each do |song|
      new_hash = {}
      new_hash[:title] = song.css(".title a").text.split.map(&:capitalize).join(' ')
      new_hash[:artist] = song.css(".artist a").text.split.map(&:capitalize).join(' ')
      new_hash[:label] = song.css(".label").text.split.map(&:capitalize).join(' ')
      new_hash[:coverlink] = song.css(".cover img").attribute("src").value
   
   
      song_array << new_hash
      end
    song_array
  end
  
end