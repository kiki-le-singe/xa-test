define([
  'marionette',
  '#hello/controllers/nav',
  '#hello/routers/routers'
],

function (Marionette, NavController, Routers) {
  'use strict';

  return function (options) {
    options = options || {};

    var App = new Marionette.Application();

    // When the application is ready
    App.on('start', function () {
      this.routers = new Routers({
        controller: new NavController(options)
      });
    });

    return App;
  };
});
