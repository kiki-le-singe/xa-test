'use strict';

// https://github.com/karma-runner/gulp-karma

var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('test', function (done) {
  karma.start({
    configFile: '../../../karma.conf.js',
    singleRun: true
  }, function () {
    done();
  });
});
