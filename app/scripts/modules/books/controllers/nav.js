define([
  'marionette',
  '#books/resource/books',
  '#books/views/layout'
],

function (Marionette, booksResource, BooksLayoutView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
    },

    books: function () {
      var self = this;
      booksResource(null).then(function (collection) {
        // shows the books layout view.
        var booksLayoutView = new BooksLayoutView({
          collection: collection
        });
        self.contentRegion.show(booksLayoutView);
      });
    }
  });
});
