define([
  'backbone'
],

function (Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      success: 'CONGRATS!'
    },

    initialize: function () {
      console.log('initialize: helloWorldModel');
    }
  });
});
