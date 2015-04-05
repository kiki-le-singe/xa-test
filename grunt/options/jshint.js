'use strict';

// linting
module.exports = {
  options: {
    ignores: ['<%= yeoman.app %>/scripts/templates.js'],
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= yeoman.app %>/scripts/{,*/}*.js',
    '!<%= yeoman.app %>/scripts/vendor/*',
    '<%= yeoman.tests %>/{,*/}*.spec.js'
  ]
};
