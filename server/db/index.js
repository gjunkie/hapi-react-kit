const mongoose = require('mongoose');
const _ = require('lodash-node');

const models = require('require-all')(__dirname + '/models');

exports.plugin = {
  register: (server, options) => {
    mongoose.connect(options.url);

    const db = mongoose.connection;

    server.expose('connection', db);

    _.forIn(models, (value, key) => {
      server.expose(key, value);
    });
  },
  name: 'db'
}
//const register = async (plugin, options, next) => {

  //mongoose.connect(options.url, () => {
    //next();
  //});

  //const db = mongoose.connection;

  //plugin.expose('connection', db);

  //_.forIn(models, (value, key) => {
    //plugin.expose(key, value);
  //});
//};

//exports.register.attributes = { 
  //name: 'db'
//};
