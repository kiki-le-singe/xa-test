'use strict';

var gulp = require('gulp');

gulp.task('default', ['serve']);

gulp.task('serve', [
  'sass:dev',
  'handlebars:dev',
  'server',
  'open:server',
  'lint',
  'watch'
]);

gulp.task('lint', [
  'jshint',
  'jscs'
]);

gulp.task('dist', [
  'sass:dist',
  'handlebars:dev',
  'requirejs',
  'processhtml'
]);

gulp.task('build', [
  'dist'
]);
