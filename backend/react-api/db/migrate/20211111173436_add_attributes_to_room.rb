class AddAttributesToRoom < ActiveRecord::Migration[6.1]
  def change
    add_column :rooms, :bedrooms, :integer
    add_column :rooms, :bathrooms, :integer
    add_column :rooms, :price, :integer
    add_column :rooms, :image, :string
  end
end
