var Hapi = require('hapi');
var faker = require('faker');

// Get a user
module.exports = (request, h) => {
  console.log("You hit the GET endpoint! You sent this:");
  console.log(request.payload);
  return new Promise((resolve, reject) => {
    let User = request.server.plugins.db.User;
    let sampleUser = {
      id: faker.random.number(),
      name: faker.name.findName(),
      email:'test@hello.com' ,
      correct: 0,
      color: '',
    };

    //const user = User.create(sampleUser, function(err, newUser) {
      //if (err) {
        //console.log("ERR", err);
        ////return Hapi.error.internal('create user', err);
      //}
      //console.log(newUser);
      //return newUser;
    //});

    return resolve(sampleUser);
  })
};
