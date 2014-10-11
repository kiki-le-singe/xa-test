define([
  'handlebars'
],

function (Handlebars) {
  'use strict';

  var bar = function (context, options) {
    return context;
  };

  var foo = function (context, options) {
    return context;
  };

  Handlebars.registerHelper('bar', bar);
  Handlebars.registerHelper('foo', foo);
});
