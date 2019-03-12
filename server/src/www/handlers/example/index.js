var Hapi = require('hapi');

// Get a user
module.exports = (request, h) => {
  console.log('you hit it')
  return h.redirect('/');
};
