// var gulp = require('gulp');

require('gulp-load-plugins')();

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md
// http://makina-corpus.com/blog/metier/2015/make-your-gulp-modular
var requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

/*
gulp.task('default', function () {
  // place code for your default task here
  console.log('coucou');
});*/
