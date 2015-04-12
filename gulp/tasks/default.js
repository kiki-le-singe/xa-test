'use strict';

var gulp = require('gulp');

gulp.task('default', function () {
  // place code for your default task here
  console.log('coucou');
});

// Temporary use of gulp-grunt plugin.
// https://www.npmjs.com/package/gulp-grunt
require('gulp-grunt')(gulp, {
  base: require('path').join(__dirname, '../..'),
  verbose: true
}); // add all the gruntfile tasks to gulp
