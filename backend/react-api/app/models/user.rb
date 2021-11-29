class User < ApplicationRecord
  validates :name, :password, presence: true

  has_many :bookings
  has_many :rooms, through: :bookings
  has_secure_password
end
