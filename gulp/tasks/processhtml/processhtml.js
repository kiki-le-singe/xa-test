'use strict';

// https://www.npmjs.com/package/gulp-processhtml
// https://www.npmjs.com/package/gulp-htmlmin

var gulp = require('gulp');
var processhtml = require('gulp-processhtml');
var htmlmin = require('gulp-htmlmin');
var config = require('./config').processhtml;

gulp.task('processhtml', function () {
  return gulp.src(config.src)
   .pipe(processhtml())
   .pipe(htmlmin(config.htmlmin.options))
   .pipe(gulp.dest(config.dest));
});
