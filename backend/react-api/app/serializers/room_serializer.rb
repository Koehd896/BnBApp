class RoomSerializer < ActiveModel::Serializer
  attributes :title, :uuid, :bedrooms, :bathrooms, :price, :image, :id
end
