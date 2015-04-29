'use strict';

// https://github.com/spalger/gulp-jshint
// https://github.com/wearefractal/gulp-cached

var gulp   = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').jshint;

gulp.task('jshint', function () {
  return gulp.src(config.src)
    .pipe($.cached('jshint'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});
