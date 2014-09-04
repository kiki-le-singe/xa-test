define([
  'marionette',
  'views/helloWorldItemView',
  'views/librariesCompositeView',
  'models/helloWorldModel',
  'models/librariesCollection'
],

function (Marionette, HelloWorldItemView, LibrariesCompositeView, HelloWorldModel, LibrariesCollection) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      this.contentRegion.show(new HelloWorldItemView({
        model: new HelloWorldModel()
      }));
    },

    libraries: function () {
      this.contentRegion.show(new LibrariesCompositeView({
        collection: new LibrariesCollection()
      }));
    }
  });

  return NavController;
});
