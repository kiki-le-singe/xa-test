'use strict';

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
        templates: '../../<%= yeoman.tmp %>/scripts/templates'
      },
      include: 'requireLib',
      wrapShim: true
    }
  }
};
