'use strict';

// https://www.npmjs.com/package/gulp-zip
// https://github.com/wearefractal/gulp-cached

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').zip;

gulp.task('zip', function () {
  return gulp.src('dist/**/*')
    .pipe($.cached('zip'))
    .pipe($.zip(config.archive))
    .pipe(gulp.dest('.'));
});
