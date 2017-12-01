var Hapi = require('hapi');
var faker = require('faker');

// Create a user
module.exports = (request, h) => {
  console.log("You hit the POST endpoint! You sent this:");
  console.log(request.payload);
  let User = request.server.plugins.db.User;
  let sampleUser = {
    id: faker.random.number(),
    name: faker.name.findName(),
    email:'test@hello.com' ,
    correct: 0,
    color: '',
  };

  const user = User.create(sampleUser, function(err, newUser) {
    if (err) {
      console.log("ERR", err);
      return Hapi.error.internal('create user', err);
    }
    console.log('Created user:');
    console.log(newUser);
    return newUser;
  });

  return user;
};

