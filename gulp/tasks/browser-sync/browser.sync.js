'use strict';

// https://github.com/BrowserSync/gulp-browser-sync
// http://www.browsersync.io/docs/gulp/
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('./config').browserSync;

gulp.task('open:server', function () {
  browserSync({
    proxy: config.proxy
  });

  gulp.watch([config.css, config.templates], reload);
});
