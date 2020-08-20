class User < ActiveRecord::Base
  has_secure_password
  has_many :charts
  has_many :birthdays
end