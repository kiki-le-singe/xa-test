define([
  'marionette',
  'controllers/nav',
  'views/rootLayoutView',
  'views/menuItemView',
  'routers/routers',
  '#hello/index'
],

function (Marionette, NavController, RootLayoutView, MenuItemView, Routers, Hello) {
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
    this.hello = new Hello(options);
  });

  return app;
});
