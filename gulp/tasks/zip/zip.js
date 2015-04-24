'use strict';

// https://www.npmjs.com/package/gulp-zip

var gulp = require('gulp');
var zip = require('gulp-zip');
var config = require('./config').zip;

gulp.task('zip', function () {
  return gulp.src('dist/**/*')
    .pipe(zip(config.archive))
    .pipe(gulp.dest('.'));
});
