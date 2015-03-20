'use strict';

// https://www.npmjs.com/package/gulp-handlebars
// https://www.npmjs.com/package/gulp-wrap
// https://www.npmjs.com/package/gulp-declare
// https://www.npmjs.com/package/gulp-concat

// @TODO: see https://github.com/lazd/gulp-handlebars/tree/master/examples/partials

var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var config = require('./config').handlebars;

gulp.task('handlebars', function () {
  // Load templates from the templates/ folder relative to where gulp was executed
  gulp.src(config.src)
    // Compile each Handlebars template source file to a template function
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(wrap('define(["handlebars"], function(Handlebars) {<%= contents %>return this["templates"];});'))
    // Write the output into the .tmp/scripts folder
    .pipe(gulp.dest(config.dest));
});
