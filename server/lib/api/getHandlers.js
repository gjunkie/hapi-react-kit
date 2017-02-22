'use strict';

exports.exampleGET = {
  handler: function handler(request, done) {
    //let User = request.server.plugins.db.User;
    var sampleData = {
      name: 'Jeremiah Johnson',
      title: 'Badass',
      from: 'file getHandlers.js'
    };

    console.log("You hit the GET endpoint! It returned this:");
    console.log(sampleData);
    return done(null, sampleData);
  }
};