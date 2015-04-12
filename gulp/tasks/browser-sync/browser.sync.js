'use strict';

// https://github.com/BrowserSync/gulp-browser-sync
// http://www.browsersync.io/docs/gulp/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config').browserSync;

gulp.task('openapp', function () {
  browserSync({
    proxy: config.proxy
  });
});
