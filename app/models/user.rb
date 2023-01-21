class User < ApplicationRecord
  has_many :greetings, dependent: :destroy

  validates :name, presence: true
end
