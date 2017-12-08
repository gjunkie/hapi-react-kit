var Hapi = require('hapi');

// Delete user
module.exports = (request, h) => {
  console.log('You hit the DELETE user endpoint!')
  const UserCollection = request.server.plugins.db.User; 
  const userId = request.params.id;

  UserCollection.find({ id: userId }).remove().exec();
  return { id: userId };
};
