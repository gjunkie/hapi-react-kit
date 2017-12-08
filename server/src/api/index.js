// list your api endpoints with their handlers here.
// look at ./handlers/get and ./handlers/post to see sample handlers.
const requestHandlers = require('./handlers')

exports.plugin = {
  register: (server, options) => {
    server.route([
      { method: 'GET', path: '/api/getuser', options: { handler: requestHandlers.get.user } },
      { method: 'GET', path: '/api/getusers', options: { handler: requestHandlers.get.users } },
      { method: 'POST', path: '/api/createuser', options: { handler: requestHandlers.post.user } },
      { method: 'DELETE', path: '/api/deleteuser/{id}', options: { handler: requestHandlers.delete.user } },
    ])

    //server.expose('get', (request, url, callback) => {
      //server.inject({
        //method: 'GET',
        //url: url,
        //headers: {
          //cookie: (request.headers) ? request.headers.cookie : false
        //},
        //credentials: request.auth.credentials || null
      //}, callback);
    //});

    //server.expose('post', (request, url, data, callback) => {
      //server.inject({
        //method: 'POST',
        //url: url,
        //payload: data,
        //headers: {
          //cookie: (request.headers) ? request.headers.cookie : false
        //},
        //credentials: request.auth.credentials.creds || null
      //}, callback);
    //});
  },
  name: 'api',
};

