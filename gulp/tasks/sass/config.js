'use strict';

var sassDir = 'app/styles/scss';
var foundationIconFontsDir = 'app/bower_components/foundation-icon-fonts/';

module.exports = {
  sass: {
    cssDir: 'app/styles/css',
    mainSassFile: sassDir + '/main.scss',
    dist: {
      dest: 'dist/styles/'
    }
  },
  fonts: {
    src: [
      foundationIconFontsDir + '*.eot',
      foundationIconFontsDir + '*.svg',
      foundationIconFontsDir + '*.ttf',
      foundationIconFontsDir + '*.woff'
    ],
    dev: {
      path: '../../bower_components/foundation-icon-fonts'
    },
    dist: {
      path: 'fonts',
      dest: 'dist/styles/fonts/'
    }
  }
};
