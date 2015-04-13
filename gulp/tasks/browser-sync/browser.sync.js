'use strict';

// https://github.com/BrowserSync/gulp-browser-sync
// http://www.browsersync.io/docs/gulp/

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('./config').browserSync;

gulp.task('serve', function () {
  browserSync({
    proxy: config.proxy
  });

  gulp.watch([config.css, config.templates], reload);
});
