define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['book/book'],
    className: 'book',
    tagName: 'li',

    initialize: function () {
      console.log('initialize: bookView');
    },

    onRender: function () {
      this.$el.fadeIn();
    }
  });
});
