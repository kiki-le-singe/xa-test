'use strict';

// linting
module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= yeoman.app %>/scripts/{,*/}*.js',
    '!<%= yeoman.app %>/scripts/vendor/*',
    'tests/{,*/}*.spec.js'
  ]
};
