'use strict';

module.exports = function (grunt, options) {
  return {
    test: ['mocha', 'lint'],
    serve: [
      'compass:dev',
      'handlebars',
      'express:dev',
      'open:server',
      'lint',
      'watch'
    ],
    lint: ['jshint', 'jscs'],
    dist: [
      'clean:dist',
      'compass:dist',
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
