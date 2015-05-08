define([
  'marionette',
  'underscore',
  'views/rootLayoutView',
  'modules'
],

  'use strict';

  var app = new Marionette.Application();

  // When the application is ready
  app.on('start', function () {
    var rootLayoutView = new RootLayoutView();
    var options = {
      contentRegion: rootLayoutView.content
    };

    rootLayoutView.render();

    // start modules
    modules(options);
  });

  return app;
});
