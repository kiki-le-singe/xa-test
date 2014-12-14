'use strict';

module.exports = {
  dist: {
    expand: true,
    cwd: '<%= yeoman.tmp %>/styles/css',
    src: 'main.css',
    dest: '<%= yeoman.dist %>/styles/',
    ext: '.min.css'
  }
};
