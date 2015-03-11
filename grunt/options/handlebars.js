'use strict';

module.exports = {
  compile: {
    options: {
      namespace: 'templates',
      amd: true,

      processName: function (filePath) {
        var matches = filePath.match(new RegExp('app/scripts/(modules/(\\w+)/templates|templates)/(.*).hbs'));
        return matches ? matches[3] : filePath;
      },

      processPartialName: function (filePath) {
        var matches = filePath.match(new RegExp('app/scripts/(modules/(\\w+)/templates|templates)/((.*)\/?)_(.*).hbs'));
        if (!matches) {
          return filePath;
        }
        return (matches[2] ? matches[2] + '/' : '') + (matches[3] ? matches[3] : '') + matches[5];
      }
    },
    files: {
      '<%= yeoman.tmp %>/scripts/templates.js': ['<%= yeoman.app %>/scripts/**/*.hbs']
    }
  }
};
