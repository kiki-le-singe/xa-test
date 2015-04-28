'use strict';

// linting
module.exports = {
  options: {
    excludeFiles: ['<%= yeoman.app %>/scripts/templates.js'],
    config: '.jscsrc'
  },
  src: '<%= jshint.all %>'
};
