"use strict";

exports.exampleGET = {
  handler: function handler(request, done) {
    //let User = request.server.plugins.db.User;
    console.log("You hit the first endpoint!");
    var sampleData = {
      name: 'Jeremiah Johnson',
      title: "Badass'"
    };
    return done(null, sampleData);
  }
};