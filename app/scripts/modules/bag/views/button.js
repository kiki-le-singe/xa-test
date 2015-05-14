define([
  'marionette',
  'templates',
  'vent'
],

function (Marionette, templates, vent) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['bag/button'],

    ui: {
      bag: '.bag-info',
      nbItems: '.nb-items',
      bagIcon: '.fi-shopping-bag'
    },

    events: {
      'click @ui.bag': 'showBag'
    },

    initialize: function () {
      vent.on('bag:update', this.updateBag, this);
    },

    onDestroy: function () {
      vent.off('bag:update', this.updateBag, this);
    },

    updateBag: function (collection) {
      var animateClass = 'shake';
      var activeClass = 'icon-on';
      var count = collection.length;

      // changes the number of items in shopping bag
      this.ui.nbItems.text(count);
      // play animation
      this.ui.bag
        .addClass(animateClass)
        .one('webkitAnimationEnd', function () {
          $(this).removeClass(animateClass);
        });

      // changes the color of the bag
      if (count) {
        this.ui.bagIcon.addClass(activeClass);
      }
      else {
        this.ui.bagIcon.removeClass(activeClass);
      }
    },

    showBag: function () {
      vent.trigger('bag:show');
    }
  });
});
