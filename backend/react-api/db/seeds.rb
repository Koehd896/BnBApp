# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Room.all.each {|x| x.destroy}
User.all.each {|user| user.destroy}
Booking.all.each {|booking| booking.destroy}

new_rooms = [
    {
        title: "room 1", 
        uuid: 1234, 
        bedrooms: 1, 
        bathrooms: 1, 
        price: 500, 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Langes_Tannen_Schlafzimmer_01.jpg/1200px-Langes_Tannen_Schlafzimmer_01.jpg"
    },
    {
        title: "room 2", 
        uuid: 2345, 
        bedrooms: 2, 
        bathrooms: 2, 
        price: 750, 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Simbavati4.jpg"
    }
]

new_rooms.each do |room|
    Room.create(room)
end
