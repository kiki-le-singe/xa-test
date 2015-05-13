define([
  'marionette',
  'templates',
  '#books/views/books'
],

function (Marionette, templates, BooksView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: templates['books/books-layout'],

    regions: {
      books: '.books',
      bag: '.bag',
      bagContent: '.bag-content'
    },

    onShow: function () {
      this.books.show(new BooksView({
        collection: this.collection
      }));
    }
  });
});
