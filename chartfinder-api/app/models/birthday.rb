class Birthday < ApplicationRecord
  has_many :songs
  has_many :users
end
