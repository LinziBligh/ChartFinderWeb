class Birthday < ApplicationRecord
  default_scope { includes(:songs).order('songs.year ASC') }
  has_many :songs
  has_many :users
end
