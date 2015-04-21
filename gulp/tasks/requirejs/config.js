'use strict';

module.exports = {
  requirejs: {
    options: {
      baseUrl: 'app/scripts/',
      out: 'script.min.js',
      name: 'init',
      mainConfigFile: 'app/scripts/init.js',
      preserveLicenseComments: false,
      paths: {
        requireLib: '../bower_components/requirejs/require',
        templates: 'templates'
      },
      findNestedDependencies: true,
      include: 'requireLib',
      wrapShim: true
    },
    dest: 'dist/js/'
  }
};
