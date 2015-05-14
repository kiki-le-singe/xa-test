define([
  'backbone'
],

function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      isbn: '',
      title: '',
      price: 0,
      cover: ''
    }
  });
});
