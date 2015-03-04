// server/test.js

////////////////
// BASE SETUP //
////////////////

// Module dependencies.
var application_root = __dirname,
    express = require('express'), // Web framework
    app = express(), // define server
    path = require('path'), // Utilities for dealing with file paths
    bodyParser = require('body-parser'),
    port = process.env.PORT || 9001; // set our port

// parses request body and populates request.body
app.use(bodyParser());
// where to serve static content
app.use(express.static(path.join(application_root, '../')));


//////////////////////
// START THE SERVER //
//////////////////////

app.listen(port, function() {
  console.log('Express server listening on port %d in %s node', port, app.settings.env);
});
