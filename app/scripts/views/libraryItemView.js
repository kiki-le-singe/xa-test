define([
  'marionette',
  'views/libraryItemView',
  'templates'
],

function (Marionette, LibraryItemView, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['library'],

    initialize: function () {
      console.log('initialize: libraryItemView');
    }
  });
});
