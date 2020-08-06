class CreateCharts < ActiveRecord::Migration[6.0]
  def change
    create_table :charts do |t|
      t.string :date
      t.string :country
      t.timestamps
    end
  end
end
