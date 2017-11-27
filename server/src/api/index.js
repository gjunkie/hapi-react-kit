const getHandlers = require('./handlers/get')
const postHandlers = require('./handlers/post')

exports.plugin = {
  register: (server, options) => {
    server.route([
      // list your api endpoints with their handlers here.
      // look at ./handlers files to see sample handlers.

      // list your GET handlers
      { method: 'GET', path: '/api/exampleget', options: { handler: getHandlers.users } },

      // list your POST handlers
      //{ method: 'POST', path: '/api/examplepost', options: postHandlers.examplePOST },
    ])

    //let server = plugin.connections[0];                       

    server.expose('get', (request, url, callback) => {   
      server.inject({                                             
        method: 'GET',                                            
        url: url,                                 
        headers: {                               
          cookie: (request.headers) ? request.headers.cookie : false  
        },
        credentials: request.auth.credentials || null          
      }, callback);                                               
    });

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
  name: 'api'
}

//exports.register.attributes = {
  //name: 'api'
//}

