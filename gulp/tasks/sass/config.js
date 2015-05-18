'use strict';

var sassDir = 'app/styles/scss';

module.exports = {
  sass: {
    cssFramework: 'app/bower_components/bootstrap/dist/css/bootstrap.css',
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
