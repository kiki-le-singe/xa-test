'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  var path = require('path');

  // configurable paths
  var yeomanConfig = {
    pkg: grunt.file.readJSON('package.json'),
    app: 'app',
    dist: 'dist',
    tmp: '.tmp',
    tests: 'tests/js/spec',
    docs: 'docs',
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
