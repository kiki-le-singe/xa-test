'use strict';

module.exports = function (grunt) {
  return {
    options: {
      jshint: grunt.file.readJSON('.jshintrc')
    },
    report: {
      files: {
        reports: ['<%= yeoman.app %>/scripts/**/*.js']
      }
    }
  };
};
