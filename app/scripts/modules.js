define([
  '#books/index'
],

function (Books) {
  'use strict';

  return function (options) {
    options = options || {};

    var modules = [
      new Books(options)
    ];

    return modules;
  };
});
