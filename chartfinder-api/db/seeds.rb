# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

song_a = Song.create(name: "Do Be Do", artist: "S Club 7", img_url:"https://upload.wikimedia.org/wikipedia/en/1/16/S_Club_Sunshine_%28Album_Cover%29.jpg")
song_b = Song.create(name: "Best Song Ever", artist: "Kylie Minogue", img_url:"https://vignette.wikia.nocookie.net/kylieminogue/images/5/52/2_Hearts.jpg/revision/latest/scale-to-width-down/220?cb=20161113160538")
song_c = Song.create(name: "MMMM Bwop", artist: "Take That", img_url:"https://upload.wikimedia.org/wikipedia/en/a/a7/Take_that_and_party.jpg")
song_d = Song.create(name: "BananaFarmer", artist: "Vengaboys", img_url:"https://upload.wikimedia.org/wikipedia/en/f/f8/BoomBoomBoomBoom.jpg")

chart_a = Chart.create(date: "08-01-1984",  country:"UK", songs: [song_d, song_b])
chart_b = Chart.create(date: "11-08-1989",  country:"Japan", songs:[song_a, song_c] )
chart_c = Chart.create(date: "25-12-1995",  country:"USA", songs: [song_c, song_b])


