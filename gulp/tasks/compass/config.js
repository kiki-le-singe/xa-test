'use strict';

var sassDir = 'app/styles/sass';

module.exports = {
  sass: {
    cssDir: 'app/styles/css',
    mainSassFile: sassDir + '/main.scss',
    dist: {
      dest: 'dist/styles/'
    }
  }
};
