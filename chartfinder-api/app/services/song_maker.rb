class Song_Maker

  attr_accessor :title, :artist, :label, :coverlink
  
    @@all = []
  
    def initialize(song_hash)
      
      @title = song_hash[:title]
      @artist = song_hash[:artist]
      @label = song_hash[:label]
      @coverlink = song_hash[:coverlink]
      @@all << self
    end
  
    def self.create_from_collection(song_array)
      song_array.each {|song| 
        self.new(song)}
     end
  
    def self.all
      @@all
     end
  end