'use strict';

module.exports = {
  compile: {
    options: {
      processName: function (filePath) {
        var matches = filePath.match(new RegExp('app/scripts/(modules/templates|templates)/(.*).hbs'));
        return matches ? matches[2] : filePath;
      },
      namespace: 'templates',
      amd: true
    },
    files: {
      '<%= yeoman.tmp %>/scripts/templates.js': ['<%= yeoman.app %>/scripts/**/*.hbs']
    }
  }
};
