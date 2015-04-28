'use strict';

module.exports = {
  compile: {
    options: {
      namespace: 'templates',
      amd: true,

      processName: function (filePath) {
        var matches = filePath.match(new RegExp('app/scripts/(modules/(\\w+)/templates|templates)/((.*)\/?)(.*).hbs'));
        if (!matches) {
          return filePath;
        }
        return (matches[2] ? matches[2] + '/' : '') + (matches[3] ? matches[3] : '');
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
      '<%= yeoman.app %>/scripts/templates.js': ['<%= yeoman.app %>/scripts/**/*.hbs']
    }
  }
};
