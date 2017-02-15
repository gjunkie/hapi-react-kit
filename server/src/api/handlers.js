exports.exampleEndpoint = { 
  handler: {
		function(request, done) {
		//let User = request.server.plugins.db.User;
			//console.log(User);
			console.log("CREATED USER!!!!!!!!!!!!!!");
			sampleData = {
        name: 'Jeremiah Johnson',
        title: "Badass'"
			}
			done(null, sampleData);
		}
  }
};

