class BookingSerializer < ActiveModel::Serializer
    attributes :room_id, :user_id
    belongs_to :user
end
  