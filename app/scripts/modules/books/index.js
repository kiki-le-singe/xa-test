define([
  'marionette',
  '#books/controllers/nav',
  '#books/routers/routers',
  '#books/requests/books'
],

function (Marionette, NavController, Routers, booksApiRequests) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      // init api requests
      booksApiRequests();

      this.routers = new Routers({
        controller: new NavController(options)
      });
    }
  });
});
