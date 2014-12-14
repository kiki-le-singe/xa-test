define([
  'handlebars'
],

function (Handlebars) {
  'use strict';

  var bar = function (context, options) { // jshint unused:false
    return context;
  };

  var foo = function (context, options) { // jshint unused:false
    return context;
  };

  Handlebars.registerHelper('bar', bar);
  Handlebars.registerHelper('foo', foo);
});
