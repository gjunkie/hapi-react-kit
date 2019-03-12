// list your api endpoints with their handlers here.
// look at ./handlers/get and ./handlers/post to see sample handlers.
const requestHandlers = require('./handlers')

exports.plugin = {
  register: (server, options) => {
    server.route([
      { method: 'GET', path: '/example', handler: (request, h) => {
          console.log('you hit it')
          return h.redirect('/');
        }
      },
    ])
  },
  name: 'www',
};

