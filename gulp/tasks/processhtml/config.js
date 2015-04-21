'use strict';

module.exports = {
  processhtml: {
    src: 'app/index.html',
    dest: 'dist',
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      }
    }
  }
};
