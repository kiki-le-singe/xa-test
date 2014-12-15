'use strict';

module.exports = {
  main: {
    options: {
      archive: '<%= yeoman.pkg.name %>-<%= yeoman.pkg.version %>.tgz'
    },
    files: [
      {
        expand: true,
        cwd: 'dist/',
        src: ['**/*'],
        dest: '.'
      }
    ]
  }
};
