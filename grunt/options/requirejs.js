'use strict';

// For a full list of possible options see:
// https://github.com/jrburke/r.js/blob/master/build/example.build.js

module.exports = {
  compile: {
    options: {
      baseUrl: '<%= yeoman.app %>/scripts/',
      name: 'init',
      mainConfigFile: '<%= yeoman.app %>/scripts/init.js',
      out: '<%= yeoman.dist %>/js/script.min.js',
      preserveLicenseComments: false,
      optimize: 'uglify2',
      paths: {
        requireLib: '../bower_components/requirejs/require',
        templates: 'templates'
        // templates: '../../<%= yeoman.tmp %>/scripts/templates'
      },
      findNestedDependencies: true,
      include: 'requireLib',
      wrapShim: true
    }
  }
};
