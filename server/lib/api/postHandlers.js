"use strict";

exports.examplePOST = {
    handler: function handler(request, done) {
        console.log("You hit the POST endpoint! You sent this:");
        console.log(JSON.parse(request.payload));

        // do something with the payload
        var sampleData = request.payload;

        return done(null, sampleData);
    }
};