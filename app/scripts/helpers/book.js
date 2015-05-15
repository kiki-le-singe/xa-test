define([], function () {
  'use strict';

  var bookHelper = Object.create(null);

  bookHelper.sumPrices = function (books) {
    if (!books) {
      return;
    }

    var prices = books.pluck('price');
    var count = prices.length;
    var sum = 0;

    for (var i = 0; i < count; i += 1) {
      sum += prices[i];
    }
    return sum;
  };

  return bookHelper;
});
