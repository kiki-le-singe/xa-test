define([
  'marionette',
  '#book/views/bookItem',
  'templates'
],

function (Marionette, BookItemView, templates) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: templates['bag/details-composite'],
    childViewContainer: '.items',
    childView: BookItemView,
    className: 'bag-details row',

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
