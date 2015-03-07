define([
  'marionette',
  'controllers/nav',
  'views/rootLayoutView',
  'views/menuItemView',
  'routers/routers',
  // '#hello/app'
  '#hello/index'
],

function (Marionette, NavController, RootLayoutView, MenuItemView, Routers, hello) {
  'use strict';

  var App = new Marionette.Application();

  // When the application is ready
  App.on('start', function () {
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
    hello(options).start();
  });

  return App;
});
