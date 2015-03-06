define([
  '#hello/controllers/nav',
  '#hello/routers/routers',
  'vent'
],

function (NavController, Routers, vent) {
  'use strict';

  return function (options) {
    options = options || {};

    return {
      routers: function () {
        return new Routers({
          controller: new NavController(options)
        });
      },

      start: function () {
        this.routers();
        vent.trigger('module:hello:bootstrapped');
      }
    };
  };
});
