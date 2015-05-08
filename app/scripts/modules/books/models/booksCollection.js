define([
  'backbone',
  'json!#books/config/api.json',
  '#book/models/bookModel'
],

function (Backbone, api, BookModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: BookModel,
    url: api.books
  });
});
