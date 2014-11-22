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
    port = process.env.PORT || 9000, // set our port
    args = process.argv,
    stubArg = (args[2] === 'true');

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

// Get a list of libraries
router.route('/libraries')
  .get(function(request, response) {
    response.json([
      {
        name : 'HTML5 Boilerplate',
        url : 'http://www.w3.org/TR/html5/'
      },
      {
        name : 'jQuery',
        url : 'http://jquery.com/'
      },
      {
        name : 'Backbone.js',
        url : 'http://backbonejs.org/'
      },
      {
        name : 'Marionette.js',
        url : 'http://marionettejs.com/'
      },
      {
        name : 'Lo-Dash',
        url : 'http://lodash.com/'
      },
      {
        name : 'Handlebars.js',
        url : 'http://handlebarsjs.com/'
      },
      {
        name : 'RequireJS',
        url : 'http://requirejs.org/'
      },
      {
        name : 'Express',
        url : 'https://www.npmjs.org/package/express'
      },
      {
        name : 'Mocha',
        url : 'http://visionmedia.github.io/mocha/'
      },
      {
        name : 'Sinon.JS',
        url : 'http://sinonjs.org/'
      },
      {
        name : 'chaijs',
        url : 'http://chaijs.com/'
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
