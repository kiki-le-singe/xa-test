'use strict';

module.exports = function (grunt, options) {
  return {
    default: ['serve'],
    test: ['handlebars', 'mocha', 'lint'],
    serve: [
      'sass:dev',
      'handlebars',
      'express:dev',
      'open:server',
      'lint',
      'watch'
    ],
    lint: ['jshint', 'jscs'],
    dist: [
      'clean:dist',
      'sass:dist',
      'cssmin:dist',
      'handlebars',
      'requirejs',
      'processhtml:dist',
      'htmlmin:dist'
    ],
    build: ['dist', 'clean:release', 'compress', 'clean:dist'],
    docs: ['groc', 'open:docs']
  };
};
