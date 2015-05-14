define([
  'marionette',
  'templates',
  '#books/views/books',
  '#bag/views/bag'
],

function (Marionette, templates, BooksView, BagView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: templates['books/books-layout'],
    className: 'books-container',

    regions: {
      books: '.books',
      bag: '.bag',
      bagDetails: '.bag-details'
    },

    onShow: function () {
      this.books.show(new BooksView({
        collection: this.collection
      }));

      this.bag.show(new BagView());
    }
  });
});
