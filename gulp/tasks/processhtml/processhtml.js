'use strict';

// https://www.npmjs.com/package/gulp-processhtml
// https://www.npmjs.com/package/gulp-htmlmin
// https://github.com/wearefractal/gulp-cached

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').processhtml;

gulp.task('processhtml', function () {
  return gulp.src(config.src)
    .pipe($.cached('processhtml'))
    .pipe($.processhtml())
    .pipe($.htmlmin(config.htmlmin.options))
    .pipe(gulp.dest(config.dest));
});
