'use strict';

module.exports = {
  compass: {
    files: ['<%= yeoman.app %>/styles/**/*.scss'],
    tasks: ['compass:dev']
  },
  livereload: {
    files: [
    '<%= yeoman.app %>/*.html',
    '{.tmp,<%= yeoman.app %>}/styles/{,**/}*.css',
    '{.tmp,<%= yeoman.app %>}/scripts/{,**/}*.js',
    '{.tmp,<%= yeoman.app %>}/templates/{,**/}*.hbs',
    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
    // 'test/spec/{,**/}*.js' TODO livereload the next new tests
    ],
    options: {
      livereload: true
    }
  }
};
