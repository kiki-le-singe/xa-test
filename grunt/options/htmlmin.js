'use strict';

module.exports = {
  dist: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      '<%= yeoman.dist %>/index.html': '<%= yeoman.tmp %>/index.html'
    }
  }
};
