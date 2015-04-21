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
