'use strict';

// https://github.com/jscs-dev/gulp-jscs
// https://github.com/wearefractal/gulp-cached

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').jscs;

gulp.task('jscs', function () {
  return gulp.src(config.src)
    .pipe($.cached('jscs'))
    .pipe($.jscs());
});
