define([
  'backbone',
  '#book/models/bookModel'
],

function (Backbone, BookModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: BookModel
  });
});
