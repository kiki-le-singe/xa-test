'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  var path = require('path');

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist',
    tmp: '.tmp',
    tests: 'tests/js/spec',
  };

  var config = {
    yeoman: yeomanConfig
  };

  grunt.initConfig(config);

  require('load-grunt-config')(grunt, {
    configPath: [
      path.join(process.cwd(), 'grunt'),
      path.join(process.cwd(), 'grunt/options')
    ],
    config: config,
    init: true
  });
};
