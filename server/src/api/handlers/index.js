const getHandlers = require('./get');
const postHandlers = require('./post');

module.exports = {
  get: {
    user: getHandlers.user,
  },
  post: {
    user: postHandlers.user,
  },
};
