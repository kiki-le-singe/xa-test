define([
  'marionette',
  '#books/models/booksCollection',
  '#books/views/layout'
],

function (Marionette, BooksCollection, BooksLayoutView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
      this.collection = new BooksCollection();
    },

    books: function () {
      var options = {
        success: this.showBooksView.bind(this)
      };
      this.collection.fetch(options);
    },

    showBooksView: function () {
      var booksLayoutView = new BooksLayoutView({
        collection: this.collection
      });
      this.contentRegion.show(booksLayoutView);
    }
  });
});
