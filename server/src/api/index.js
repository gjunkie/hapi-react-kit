const handlers = require('./handlers')

exports.register = (plugin, options, next) => {

  plugin.route([
		// list your api paths with their handlers here
    { method: 'GET', path: '/api/path', config: handlers.example },
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
