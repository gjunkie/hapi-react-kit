
exports.exampleGET = { 
  handler: function handler(request, done) {
    //let User = request.server.plugins.db.User;
    var sampleUsers = [{
        id: '1',
        name: 'Jeremiah Johnson',
        title: 'Badass'
      },
      {
        id: '2',
        name: 'Fluffy Buckets',
        title: 'Painter'
      }
    ];

    function findUser(user) { 
      return user.id === request.query.id;
    }

    var user = sampleUsers.find(findUser);

    return done(null, user);
  }
};
