'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'test.dev',
    port: 8000,
    routes: {
      cors: true
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

