'use strict';

module.exports = {
  compass: {
    files: ['<%= yeoman.app %>/styles/**/*.scss'],
    tasks: ['compass:dev']
  },
  handlebars: {
    files: [
      '<%= yeoman.app %>/scripts/templates/**/*.hbs',
      '<%= yeoman.app %>/scripts/modules/**/templates/**/*.hbs'
    ],
    tasks: ['handlebars']
  },
  livereload: {
    files: [
    '<%= yeoman.app %>/*.html',
    '{.tmp,<%= yeoman.app %>}/styles/{,**/}*.css',
    '{.tmp,<%= yeoman.app %>}/scripts/{,**/}*.js',
    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
    // 'test/spec/{,**/}*.js' TODO livereload the next new tests
    ],
    options: {
      livereload: true
    }
  }
};
