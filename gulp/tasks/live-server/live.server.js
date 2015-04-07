'use strict';

// https://github.com/gimm/gulp-live-server
// https://www.npmjs.com/package/gulp-util

var gulp = require('gulp');
var gls = require('gulp-live-server');
var gutil = require('gulp-util');

gulp.task('server', function () {
  var server = gls(['server/app.js', gutil.env.stub]);
  server.start();
});
