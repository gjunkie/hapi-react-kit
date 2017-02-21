"use strict";

exports.examplePOST = {
    handler: function handler(request, done) {
        console.log("You hit the first POST endpoint!");
        // do something with the payload
        console.log(JSON.parse(request.payload));

        return done(null, sampleData);
    }
};