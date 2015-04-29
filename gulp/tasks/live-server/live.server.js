'use strict';

// https://github.com/gimm/gulp-live-server
// https://www.npmjs.com/package/gulp-util

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config').liveServer;

gulp.task('server', function () {
  var server = $.liveServer([config.file, $.util.env.stub]);
  server.start();
});
