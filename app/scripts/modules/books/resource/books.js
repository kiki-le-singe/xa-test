define([
  '#books/models/booksCollection',
  'bluebird'
],

function (BooksCollection, Promise) {
  'use strict';

  return function (options) {
    options = options || {};

    return new Promise(function (resolve, reject) {
      var books = new BooksCollection(options);
      debugger;

      books.fetch({
        success: function () {
          resolve(books);
        },
        error: function () {
          reject();
        }
      });
    });
  };
});
