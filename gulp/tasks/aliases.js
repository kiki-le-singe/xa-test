'use strict';

var gulp = require('gulp');

gulp.task('serve', [
  'sass:dev',
  'handlebars:dev',
  'server',
  'open:server',
  'watch'
]);
