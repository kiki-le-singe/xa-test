// server/app.js

////////////////
// BASE SETUP //
////////////////

// Module dependencies.
var application_root = __dirname,
    express = require('express'), // Web framework
    app = express(), // define server
    path = require('path'), // Utilities for dealing with file paths
    mongoose = require('mongoose'), //MongoDB integration
    bodyParser = require('body-parser'),
    port = process.env.PORT || 9000; // set our port

// parses request body and populates request.body
app.use(bodyParser());
// where to serve static content
app.use(express.static(path.join(application_root, '../app')));

////////////////////////
// ROUTES FOR OUR API //
////////////////////////

var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function(request, response) {
  response.json({ message: 'hooray! welcome to our api!' });
});

// Get a list of articles
router.route('/articles')
  .get(function(request, response) {
    response.json([
      { 
        title : 'Title 1',
        date : 'now',
        description : 'Description',
        author : 'Mickey' 
      },
      {
        title : 'Title 2',
        date : 'Saturday',
        description : 'Description 2',
        author : 'Donald' 
      }
    ]); 
  });

// all of our routes will be prefixed with /api
app.use('/api', router);



//////////////////////
// START THE SERVER //
//////////////////////

app.listen(port, function() {
  console.log('Express server listening on port %d in %s node', port, app.settings.env);
});


