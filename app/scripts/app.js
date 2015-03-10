define([
  'marionette',
  'underscore',
  'controllers/nav',
  'views/rootLayoutView',
  'views/menuItemView',
  'routers/routers',
  'modules'
],

function (Marionette, _, NavController, RootLayoutView, MenuItemView, Routers, modules) {
  'use strict';

  var app = new Marionette.Application();

  // When the application is ready
  app.on('start', function () {
    var rootLayoutView = new RootLayoutView();
    var options = {
      contentRegion: rootLayoutView.content
    };

    rootLayoutView.render();
    rootLayoutView.header.show(new MenuItemView());

    this.routers = new Routers({
      controller: new NavController(options)
    });

    // start modules
    modules(options);
  });

  return app;
});
