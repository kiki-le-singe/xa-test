define([
  'marionette',
  'controllers/nav',
  'views/menuItemView',
  'routers/routers'
],

function (Marionette, NavController, MenuItemView, Routers) {
  'use strict';

  var App = new Marionette.Application();

  /* Add application regions here */
  App.addRegions({
    header: '#header',
    content: '#content',
    footer: '#footer'
  });

  // When the application is ready
  App.on('start', function () {
    this.routers = new Routers({
      controller: new NavController({contentRegion: App.content})
    });

    this.header.show(new MenuItemView());
  });

  return App;
});
