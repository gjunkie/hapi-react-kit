'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    port: 8000,
    routes: {
      cors: {
        origin: ['http://localhost:8080', 'http://localhost:8081'],
        headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
      }
    }
});


server.register([

  { register: require('./api/') },

], (err) => {
    if (err) {
      throw err;
    }

    // Start the server
    server.start((err) => {
      if (err) {
          throw err;
      }
      console.log('Server running at:', server.info.uri);
    });
  }
);

