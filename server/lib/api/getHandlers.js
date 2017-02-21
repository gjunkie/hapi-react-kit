'use strict';

exports.exampleGET = {
  handler: function handler(request, done) {
    //let User = request.server.plugins.db.User;
    console.log("You hit the GET endpoint!");
    var sampleData = {
      name: 'Jeremiah Johnson',
      title: 'Badass',
      from: 'getHandlers.js'
    };
    return done(null, sampleData);
  }
};