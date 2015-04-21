'use strict';

// https://www.npmjs.com/package/gulp-requirejs
// https://www.npmjs.com/package/gulp-uglify

var gulp   = require('gulp');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var config = require('./config').requirejs;

gulp.task('requirejs', function () {
  rjs(config.options)
  .pipe(uglify())
  .pipe(gulp.dest(config.dest));
});
