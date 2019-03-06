var Hapi = require('hapi');
// var faker = require('faker');

/*
 * Creates a user with the payload sent in the request.
 */
module.exports = (request, h) => {
  console.log("You hit the POST endpoint! You sent this:");
  console.log(request.payload);

  return new Promise((resolve, reject) => {
    let User = request.server.plugins.db.User;
    const user = User.create(request.payload, function(err, newUser) {
      if (err) {
        return reject(Hapi.error.internal('create user', err));
      }
      return resolve(newUser)
    });

    return user;
  })
};

