define([
  'marionette',
  'views/helloWorldItemView'
],

function (Marionette, HelloWorldItemView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      this.contentRegion.show(new HelloWorldItemView());
    }
  });

  return NavController;
});
