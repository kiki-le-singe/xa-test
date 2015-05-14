define([
  'marionette',
  'templates',
  '#books/views/books',
  '#bag/views/layout'
],

function (Marionette, templates, BooksView, BagLayoutView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: templates['books/layout'],

    regions: {
      books: '.books',
      bag: '.bag'
    },

    onShow: function () {
      this.books.show(new BooksView({
        collection: this.collection
      }));

      this.bag.show(new BagLayoutView());
    }
  });
});
