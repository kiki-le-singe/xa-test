'use strict';

// https://github.com/gimm/gulp-live-server
// https://www.npmjs.com/package/gulp-util

var gulp = require('gulp');
var gls = require('gulp-live-server');
var gutil = require('gulp-util');
var config = require('./config').liveServer;

gulp.task('server', function () {
  var server = gls([config.file, gutil.env.stub]);
  server.start();
});
