'use strict';

// https://www.npmjs.com/package/gulp-requirejs
// https://www.npmjs.com/package/gulp-uglify

var gulp   = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').requirejs;

gulp.task('requirejs', function () {
  $.requirejs(config.options)
  .pipe($.uglify())
  .pipe(gulp.dest(config.dest));
});
