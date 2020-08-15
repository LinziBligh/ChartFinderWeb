class Song < ApplicationRecord
  has_many :charts
  has_many :birthdays
end
