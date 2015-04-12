define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['hello/hello'],

    initialize: function () {
      console.log('initialize: helloView');
    }
  });
});
