'use strict';

module.exports = {
  // options: {
  //     sassDir: '<%= yeoman.app %>/styles',
  //     cssDir: '.tmp/styles',
  //     imagesDir: '<%= yeoman.app %>/images',
  //     javascriptsDir: '<%= yeoman.app %>/scripts',
  //     fontsDir: '<%= yeoman.app %>/styles/fonts',
  //     importPath: '<%= yeoman.app %>/bower_components',
  //     relativeAssets: true
  // },
  dist: {
    options: {
      sassDir: '<%= yeoman.app %>/styles',
      cssDir: '<%= yeoman.tmp %>/styles/css'
    }
  },
  dev: { // Another target
    options: {
      debugInfo: true,
      sassDir: '<%= yeoman.app %>/styles',
      cssDir: '<%= yeoman.app %>/styles/css'
    }
  }
};
