'use strict';

module.exports = {
  imagemin: {
    options: {
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    },
    src: 'app/images/**/*',
    dest: 'dist/images',
    size: {
      options: {
        title: 'images'
      }
    }
  }
};
