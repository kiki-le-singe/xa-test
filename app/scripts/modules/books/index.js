define([
  'marionette',
  '#books/controllers/nav',
  '#books/routers/routers'
],

function (Marionette, NavController, Routers) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      this.routers = new Routers({
        controller: new NavController(options)
      });
    }
  });
});
