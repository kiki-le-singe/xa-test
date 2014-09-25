define([
  'handlebars'
],

function (Handlebars) {
  'use strict';

  // Good idea ???
  var myObject = Object.create(null);

  myObject.bar = function (context, options) {
    return context + "!!!!!!!!";
  };

  myObject.foo = function (context, options) {
    return context + "!!!!!!!!";
  };

  Handlebars.registerHelper('bar', myObject.bar);
  Handlebars.registerHelper('foo', myObject.foo);

  return myObject;
});
