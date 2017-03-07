var faker = require('faker');

exports.exampleGET = { 
  handler: function handler(request, done) {
    //let User = request.server.plugins.db.User;
    var sampleUser = {
        id: faker.random.number(),
        name: faker.name.findName(),
        title: faker.name.jobTitle()
      };

    return done(null, sampleUser);
  }
};
