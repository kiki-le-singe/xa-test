define([
  'marionette',
  '#bag/controllers/nav'
],

function (Marionette, NavController) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      this.controller = new NavController(options);
    }
  });
});
