define([
  'marionette',
  '#book/views/book'
],

function (Marionette, BookView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    book: function (id) {
      return this.contentRegion.show(new BookView());
    }
  });
});
