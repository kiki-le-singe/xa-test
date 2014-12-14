'use strict';

module.exports = {
  compile: {
    options: {
      processName: function (filePath) {
        var matches = filePath.match(new RegExp('app\/templates\/(.*).hbs'));
        return matches ? matches[1] : filePath;
      },
      namespace: 'templates',
      amd: true
    },
    files: {
      '<%= yeoman.tmp %>/scripts/templates.js': ['<%= yeoman.app %>/templates/**/*.hbs']
    }
  }
};
