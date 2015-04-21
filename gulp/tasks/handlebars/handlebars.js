'use strict';

// https://www.npmjs.com/package/gulp-handlebars
// https://www.npmjs.com/package/gulp-wrap
// https://www.npmjs.com/package/gulp-declare
// https://www.npmjs.com/package/gulp-concat

// Compile and register partials:
// https://github.com/lazd/gulp-handlebars/tree/master/examples/partials

// Problems encountered:
// http://stackoverflow.com/questions/28708934/handlebars-partial-printing-object-object-when-rendered
// https://github.com/lazd/gulp-handlebars/issues/54

// Fix: Temporary use of gulp-grunt plugin - https://www.npmjs.com/package/gulp-grunt
// var gulp = require('gulp');
// gulp.task('handlebars', ['grunt-hbs']);

var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var config = require('./config').handlebars;
var merge = require('merge-stream');

gulp.task('handlebars:dev', function () {
  var partials = gulp.src(config.src.partials)
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial("<%= processPartialName(file.relative) %>", Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function (filePath) {
          var matches = filePath.match(new RegExp('(modules/(\\w+)/templates|templates)/((.*)\/?)_(.*).js'));
          if (!matches) {
            return filePath;
          }
          return (matches[2] ? matches[2] + '/' : '') + (matches[3] ? matches[3] : '') + matches[5];
        }
      }
    }));

  // Load templates from the templates/ folder relative to where gulp was executed
  var templates = gulp.src(config.src.templates)
    // Compile each Handlebars template source file to a template function
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'templates',
      noRedeclare: true, // Avoid duplicate declarations
      processName: function (filePath) {
        var matches = filePath.match(new RegExp('(modules/(\\w+)/templates|templates)/((.*)\/?)(.*).js'));
        if (!matches) {
          return filePath;
        }
        return (matches[2] ? matches[2] + '/' : '') + (matches[3] ? matches[3] : '');
      }
    }));

  // Output both the partials and the templates as build/js/templates.js
  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(wrap('define(["handlebars"], function(Handlebars) {<%= contents %>return this["templates"];});'))
    .pipe(gulp.dest(config.dest));
});
