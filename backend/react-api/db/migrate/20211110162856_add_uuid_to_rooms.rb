class AddUuidToRooms < ActiveRecord::Migration[6.1]
  def change
    add_column :rooms, :uuid, :integer
  end
end
