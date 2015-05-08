define([
  'marionette',
  '#books/models/booksCollection',
  '#books/views/books'
],

function (Marionette, BooksCollection, BooksView) {
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
      this.contentRegion.show(new BooksView({
        collection: this.collection
      }));
    }
  });
});
