define([
  '#hello/index'
],

function (Hello) {
  'use strict';

  return function (options) {
    options = options || {};

    var modules = [
      new Hello(options)
    ];

    return modules;
  };
});
