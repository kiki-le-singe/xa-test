'use strict';

// https://github.com/appleboy/gulp-sass
  // options: https://github.com/sass/node-sass
// https://www.npmjs.com/package/gulp-rename
// https://www.npmjs.com/package/gulp-minify-css

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var config = require('./config').sass;

gulp.task('sass:dev', function () {
  gulp.src(config.mainSassFile)
    .pipe(sass())
    .pipe(gulp.dest(config.cssDir));
});

gulp.task('sass:dist', function () {
  gulp.src(config.mainSassFile)
    /*.pipe(sass({
      outputStyle: 'compressed'
    }))*/
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(config.dist.dest));
});
