class CreateBirthdays < ActiveRecord::Migration[6.0]
  def change
    create_table :birthdays do |t|
      t.string :date
      t.string :country
      t.integer :user_id
      t.timestamps
    end
  end
end
