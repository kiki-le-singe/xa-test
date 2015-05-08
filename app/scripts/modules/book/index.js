define([
  'marionette',
  '#book/controllers/nav',
  '#book/routers/routers',
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

      console.log('initialize: bookIndexObject');
      vent.trigger('module:book:bootstrapped');
    }
  });
});
