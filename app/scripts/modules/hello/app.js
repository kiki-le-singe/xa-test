define([
  'marionette',
  '#hello/controllers/nav',
  '#hello/routers/routers'
],

function (Marionette, NavController, Routers) {
  'use strict';

  return function (options) {
    options = options || {};

    var app = new Marionette.Application();

    // When the application is ready
    app.on('start', function () {
      this.routers = new Routers({
        controller: new NavController(options)
      });
    });

    return app;
  };
});
