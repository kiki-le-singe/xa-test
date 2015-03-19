'use strict';

module.exports = {
  sass: {
    files: ['<%= yeoman.app %>/styles/**/*.scss'],
    tasks: ['sass:dev']
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
      '{.tmp,<%= yeoman.app %>}/styles/css/{,**/}*.css',
      '{.tmp,<%= yeoman.app %>}/scripts/{,**/}*.js',
      '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
      // 'test/spec/{,**/}*.js' TODO livereload the next new tests
    ],
    options: {
      livereload: true
    }
  }
};
