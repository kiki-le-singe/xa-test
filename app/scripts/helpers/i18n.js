define([],

function () {
  'use strict';

  var keys = {
    'shopping.bag': 'Shopping Bag',
    'commercial.offer': 'Commercial Offer',
    menu: 'menu',
    'main.item.1': 'Main Item 1',
    'main.item.2': 'Main Item 2',
    'main.item.3': 'Main Item 3'
  };
  var i18n = Object.create(null);

  i18n.t = function (key) {
    return keys[key] || key;
  };

  return i18n;
});
