const dataHandlers = require('./dataHandlers')
const userHandlers = require('./userHandlers')

exports.register = (plugin, options, next) => {

  plugin.route([
    // list your api paths with their handlers here.
    // look at the ./handlers file to see a sample handler.

    // sample GET handlers
    { method: 'GET', path: '/api/mypath', config: dataHandlers.exampleGET },
    //{ method: 'GET', path: '/api/anotherpath', config: dataHandlers.anotherOneHere },

    // sample POST handlers
    { method: 'POST', path: '/api/createUser', config: userHandlers.examplePOST },
    //{ method: 'POST', path: '/api/updateProfile', config: userHandlers.updateProfile }
  ])

  let server = plugin.connections[0];                       

  plugin.expose('get', (request, url, callback) => {   
    server.inject({                                             
      method: 'GET',                                            
      url: url,                                 
      headers: {                               
        cookie: (request.headers) ? request.headers.cookie : false  
      },
      credentials: request.auth.credentials || null          
    }, callback);                                               
  });

  plugin.expose('post', (request, url, data, callback) => {
    server.inject({
      method: 'POST',
      url: url,
      payload: data,
      headers: {
        cookie: (request.headers) ? request.headers.cookie : false
      },
      credentials: request.auth.credentials.creds || null
    }, callback);
  });

  next();
}

exports.register.attributes = {
  name: 'api'
}

