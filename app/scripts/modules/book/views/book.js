define([
  'marionette',
  'behaviors/index',
  'templates'
],

function (Marionette, behaviors, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['book/book'],
    className: 'book',
    tagName: 'li',

    behaviors: {
      CartButton: {
        behaviorClass: behaviors.cartButton
      }
    },

    onRender: function () {
      this.$el.fadeIn();
    }
  });
});
