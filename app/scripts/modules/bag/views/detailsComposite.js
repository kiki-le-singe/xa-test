define([
  'marionette',
  '#book/views/bookItem',
  '#bag/views/noItemsView',
  'templates'
],

function (Marionette, BookItemView, NoItemsView, templates) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: templates['bag/details-composite'],
    childViewContainer: '.items',
    childView: BookItemView,
    className: 'bag-details',
    emptyView: NoItemsView,

    ui: {
      commercialOffer: '.commercial-offers',
      items: '.items'
    },

    onRender: function () {
      this.ui.commercialOffer.addClass('bounceInUp');
      this.ui.items.addClass('bounceInRight');
    },

    onDestroy: function () {
      if (this.collection && this.collection.length) {
        this.collection.reset();
      }
    },

    serializeData: function () {
      var commercialOffer = this.getOption('commercialOffer');
      if (commercialOffer) {
        return {
          commercialOffer: commercialOffer.bestOffer
        };
      }
    }
  });
});
