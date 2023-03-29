ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Bench.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('benches')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Creating benches..."
  Bench.create!({
    title: "Lincoln Memorial",
    description: "For the one and only",
    price: 1865,
    seating: 0,
    lat: 38.88927050632587,
    lng: -77.05013698360837
  })
  Bench.create!({
    title: "Sean's Lap",
    description: "You will feel like a-bbas sitting here 😏",
    price: 499.99,
    seating: 1,
    lat: 40.73627257214345,
    lng: -73.99378877958152
  })
  Bench.create!({
    title: "Fahim's Closet",
    description: "Get in here, we got leetcode problems to solve 👺",
    price: 1337,
    seating: 2,
    lat: 40.7362999013375,
    lng: -73.99377029226189
  })
  Bench.create!({
    title: "Washington Square Park",
    description: "The only normal bench here",
    price: 25,
    seating: 5,
    lat: 40.73084605087852,
    lng: -73.9970998247001
  })
  Bench.create!({
    title: "Forgotten Wish-Granting Bench",
    description: "Legend says an App Academy student passed all their exams after making a wish here ...but never came back",
    price: 69,
    seating: 1,
    lat: 25,
    lng: -71
  })
  

  puts "Done!"
end