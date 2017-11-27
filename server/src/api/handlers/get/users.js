var Hapi = require('hapi');
var faker = require('faker');

module.exports = (request, h) => {
  let User = request.server.plugins.db.User;
  let sampleUser = {
    id: faker.random.number(),
    name: faker.name.findName(),
    email:'test@hello.com' ,
    correct: 0,
    color: '',
  };

  console.log("BEFORE CREATING");
  const user = User.create(sampleUser, function(err, newUser) {
    console.log("CREATING");
    if (err) {
      console.log("ERR", err);
      //return Hapi.error.internal('create user', err);
    }
    console.log(newUser);
    return newUser;
  });

  return user;
};
