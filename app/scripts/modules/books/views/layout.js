define([
  'marionette',
  'templates',
  '#books/views/books',
  '#bag/views/button'
],

function (Marionette, templates, BooksView, BagButtonView) {
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

      this.bag.show(new BagButtonView());
    }
  });
});
