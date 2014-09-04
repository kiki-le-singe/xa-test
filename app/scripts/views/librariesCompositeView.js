define([
  'marionette',
  'views/libraryItemView',
  'templates'
],

function (Marionette, LibraryItemView, templates) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: templates['libraries'],
    childViewContainer: '.libraries',
    childView: LibraryItemView,

    initialize: function () {
      console.log('initialize: librariesCompositeView');
      this.collection.fetch();
    },

    serializeData: function () {
      var data = {};
      data.title = 'Libraries';
      return data;
    }
  });
});
