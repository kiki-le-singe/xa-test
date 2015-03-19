'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/styles/scss',
      src: ['*.scss'],
      dest: '<%= yeoman.tmp %>/styles/css',
      ext: '.css'
    }]
  },
  dev: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/styles/scss',
      src: ['*.scss'],
      dest: '<%= yeoman.app %>/styles/css',
      ext: '.css'
    }]
  }
};
