define([
  '#bag/index',
  '#books/index'
],

function (Bag, Books) {
  'use strict';

  return function (options) {
    options = options || {};

    var modules = [
      new Bag(options),
      new Books(options)
    ];

    return modules;
  };
});
