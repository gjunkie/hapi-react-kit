
exports.exampleGET = { 
  handler: (request, done) => {
      //let User = request.server.plugins.db.User;
      console.log("You hit the first endpoint!");
      let sampleData = {
        name: 'Jeremiah Johnson',
        title: "Badass'"
      }
      return done(null, sampleData);
    }
};
