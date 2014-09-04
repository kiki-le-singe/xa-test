define([
  'backbone',
  'json!configs/api.json',
  'models/libraryModel'
],

function (Backbone, api, LibraryModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: LibraryModel,
    url: api.libraries,
    initialize: function () {

    }
  });
});
