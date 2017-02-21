'use strict';

var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
  routes: {
    cors: {
      origin: ['http://localhost:8080'],
      headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
    }
  }
});

server.register([{ register: require('./api/') }], function (err) {
  if (err) {
    throw err;
  }

  // Start the server
  server.start(function (err) {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });
});