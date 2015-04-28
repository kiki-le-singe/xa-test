'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('mickey', shell.task('touch mickey.txt'));
