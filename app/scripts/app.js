define([
  'marionette',
  'underscore',
  'views/rootLayout',
  'views/navItem',
  'modules'
],

function (Marionette, _, RootLayoutView, NavItemView, modules) {
  'use strict';

  var app = new Marionette.Application();

  // When the application is ready
  app.on('start', function () {
    var rootLayoutView = new RootLayoutView();
    var options = {
      contentRegion: rootLayoutView.content
    };

    rootLayoutView.render();
    rootLayoutView.header.show(new NavItemView());

    // start modules
    modules(options);
  });

  return app;
});
