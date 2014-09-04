define([
  'backbone',
  'models/libraryModel'
],

function (Backbone, LibraryModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: LibraryModel,
    url: '/api/libraries'
  });
});
