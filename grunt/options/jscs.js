'use strict';

// linting
module.exports = {
  options: {
    excludeFiles: ['<%= yeoman.app %>/scripts/templates.js'],
    config: '.jscs.json'
  },
  src: '<%= jshint.all %>'
};
