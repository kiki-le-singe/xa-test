define([
  'marionette',
  'controllers/nav',
  'views/menuItemView',
  'routers/routers',
  'vent'
],

function (Marionette, NavController, MenuItemView, Routers, Vent) {
  'use strict';

  var App = new Marionette.Application();

  /* Add application regions here */
  App.addRegions({
    header: '#header',
    content: '#content',
    footer: '#footer'
  });

  /* Add initializers here */
  App.addInitializer(function () {
    this.routers = new Routers({
      controller: new NavController({contentRegion: App.content})
    });

    this.header.show(new MenuItemView());

    Vent.trigger('APP:START');
  });

  return App;
});
