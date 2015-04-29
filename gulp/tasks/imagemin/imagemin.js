'use strict';

// https://www.npmjs.com/package/gulp-imagemin
// https://github.com/wearefractal/gulp-cached

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').imagemin;

gulp.task('imagemin', function () {
  return gulp.src(config.src)
    .pipe($.cached('imagemin')) // like this or...
    .pipe($.imagemin(config.options)) // that?
    // .pipe($.cached($.imagemin(config.options)))
    .pipe(gulp.dest(config.dest))
    .pipe($.size(config.size.options));
});
