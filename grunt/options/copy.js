'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>',
      dest: '<%= yeoman.dist %>',
      src: [
      '*.{ico,txt}',
      '.htaccess',
      'images/{,*/}*.{webp,gif}',
      'bower_components/requirejs/require.js'
      ]
    }]
  }
};
