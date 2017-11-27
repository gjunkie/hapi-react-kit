const Hapi = require('hapi');
const mongo = require('mongodb');

const server = new Hapi.Server({
  port: 8000,
  routes: {
    cors: {
      origin: ['http://0.0.0.0:8080', 'http://0.0.0.0:8081'],
      headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
    }
  }
});

async function setupAndStart() {
  await server.register({
    plugin: require('./api/')
  });

  await server.register({
    plugin: require('../db'),
    options: {
        url: process.env.MONGODB_URL || 'mongodb://database:27017/appcademy',
    }
  });

  await server.start().then(() => {
    console.log('started');
  });
};

setupAndStart().then(() => {
  console.log('done dude!')
});

//server.register({
  //plugin: require('../db'),
  //options: {
    //url: process.env.MONGODB_URL || 'mongodb://0.0.0.0:27017/appcademy',
  //}
//}).then(() => {
//})

//server.register([
  //{
    //register: require('../db'),
    //options: {
      //url: process.env.MONGODB_URL || 'mongodb://0.0.0.0:27017/appcademy',
    //}
  //},
  //{ register: require('./api/') },
//]);
