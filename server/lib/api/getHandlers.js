'use strict';

exports.exampleGET = {
  handler: function handler(request, done) {
    //let User = request.server.plugins.db.User;
    var sampleUsers = [{
        id: 1,
        name: 'Jeremiah Johnson',
        title: 'Badass'
      },
      {
        id: 2,
        name: 'Fluffy Buckets',
        title: 'Painter'
      }
    ];

    var user = sampleUsers.find(request.payload);
    console.log("found:")
    console.log(user)

    return done(null, user);
  }
};
