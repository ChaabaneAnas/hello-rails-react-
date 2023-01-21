class Greeting < ApplicationRecord
  belongs_to :user

  validates :user, presence: true
  validates :message, presence: true
end
