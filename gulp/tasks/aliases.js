'use strict';

// https://www.npmjs.com/package/run-sequence

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['serve']);

gulp.task('serve', [
  'sass:dev',
  'handlebars',
  'server',
  'open:server',
  'lint',
  'watch'
]);

gulp.task('lint', [
  'jshint',
  'jscs'
]);

gulp.task('dist', function (cb) {
  runSequence('clean:dist',
    ['sass:dist', 'handlebars', 'processhtml', 'imagemin'],
    'fonts:dist',
    'requirejs',
    cb);
});

gulp.task('build', function (cb) {
// gulp.task('build', ['dist'], function (cb) {
  runSequence(
    // 'dist',
    'clean:release',
    'zip',
    'clean:dist',
    cb
  );
});
