'use strict';

var gulp = require('gulp');
var config = require('./config').watch;

gulp.task('watch', ['css-watch', 'hbs-watch']);

gulp.task('css-watch', function () {
  gulp.watch(config.scss, ['sass:dev']);
});

gulp.task('hbs-watch', function () {
  gulp.watch(config.hbs, ['handlebars']);
});
