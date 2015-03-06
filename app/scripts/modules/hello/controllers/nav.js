define([
  'marionette',
  '#hello/views/hello'
],

function (Marionette, HelloView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    hello: function () {
      return this.contentRegion.show(new HelloView());
    }
  });
});
