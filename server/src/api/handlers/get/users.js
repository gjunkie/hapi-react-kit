var Hapi = require('hapi');

// Get users
module.exports = (request, h) => {
  console.log('You hit the get all users endpoint!')
  let users = request.server.plugins.db.User.find();
  return users;
};
