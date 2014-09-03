define([
  'backbone',
  'marionette',
  'views/helloWorldItemView',
  'views/librariesCompositeView'
],

function (Backbone, Marionette, HelloWorldItemView, LibrariesCompositeView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      var fakeCollection = new Backbone.Collection([
        {name: "HTML5 Boilerplate"},
        {name: "jQuery"},
        {name: "Backbone.js"}
      ]);
      this.contentRegion.show(new LibrariesCompositeView({
        collection: fakeCollection
      }));
      // this.contentRegion.show(new HelloWorldItemView());
    }
  });

  return NavController;
});
