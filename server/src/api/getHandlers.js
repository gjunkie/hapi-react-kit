
exports.exampleGET = { 
  handler: (request, done) => {
      //let User = request.server.plugins.db.User;
      console.log("You hit the GET endpoint!");
      let sampleData = {
        name: 'Jeremiah Johnson',
        title: 'Badass',
        from: 'getHandlers.js'
      }
      return done(null, sampleData);
    }
};
