define([
  'marionette',
  '#books/controllers/nav',
  '#books/routers/routers',
  'vent'
],

function (Marionette, NavController, Routers, vent) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      this.routers = new Routers({
        controller: new NavController(options)
      });

      console.log('initialize: booksIndexObject');
      vent.trigger('module:books:bootstrapped');
    }
  });
});
