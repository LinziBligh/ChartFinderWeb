class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :img_url
      t.string :spotify_id
      t.string :label
      t.integer :position
      t.integer :chart_id
      t.timestamps
    end
  end
end
