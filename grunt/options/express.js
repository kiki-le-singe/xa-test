'use strict';

// express app
module.exports = function (grunt, options) {
  var stubOption = grunt.option('stub');

  return {
    options: {
      // Override defaults here
      port: '9000'
    },
    dev: {
      options: {
        script: 'server/app.js',
        args: [stubOption] // pass arguments to node
      }
    },
    prod: {
      options: {
        script: 'server/app.js'
      }
    },
    test: {
      options: {
        script: 'server/app.js'
      }
    }
  };
};
