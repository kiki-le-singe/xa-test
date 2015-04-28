'use strict';

// https://github.com/spalger/gulp-jshint

var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var config = require('./config').jshint;

gulp.task('jshint', function () {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
