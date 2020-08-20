class CreateCharts < ActiveRecord::Migration[6.0]
  def change
    create_table :charts do |t|
      t.string :date
      t.date :start_date
      t.date :end_date
      t.string :country
      t.integer :user_id
      t.timestamps
    end
  end
end
