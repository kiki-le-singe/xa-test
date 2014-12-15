'use strict';

module.exports = function (grunt, options) {
  return {
    createDefaultTemplate: function () {
      grunt.file.write('.tmp/scripts/templates.js', 'this.templates = this.templates || {};');
    },
    test: ['mocha'],
    serve: [
      'compass:dev',
      'connect:testserver',
      'express:dev',
      'open',
      'lint',
      'watch'
    ],
    lint: ['jshint', 'jscs'],
    dist: [
      'createDefaultTemplate', // is it helpful ?
      'clean:dist',
      'compass:dist',
      'cssmin:dist',
      'handlebars',
      'requirejs',
      'processhtml:dist',
      'htmlmin:dist'
    ],
    release: ['dist', 'clean:release', 'compress', 'clean:dist']
  };
};
