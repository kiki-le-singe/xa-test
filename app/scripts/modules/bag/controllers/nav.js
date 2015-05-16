define([
  'marionette',
  'vent',
  '#books/models/booksCollection',
  '#bag/views/detailsComposite',
  'helpers/book',
  'helpers/offer'
],

function (Marionette, vent, BooksCollection, DetailsCompositeView, bookHelper, offerHelper) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.contentRegion = this.getOption('contentRegion');
      this.collection = new BooksCollection();

      vent.on('cart:add', this.addBag, this);
      vent.on('cart:remove', this.removeBag, this);
    },

    onDestroy: function () {
      vent.off('cart:add', this.addBag, this);
      vent.off('cart:remove', this.removeBag, this);
    },

    addBag: function (model) {
      this.collection.add(model);
      this.updateBag();
    },

    removeBag: function (model) {
      this.collection.remove(model);
      this.updateBag();
    },

    updateBag: function () {
      vent.trigger('bag:update', this.collection);
    },

    showBag: function () {
      var self = this;
      var detailsCompositeView = new DetailsCompositeView();

      if (!self.collection.length) {
        return self.contentRegion.show(detailsCompositeView);
      }

      // Get commercial offers
      var promise = vent.request('books:get:commercialOffers', self.collection);

      promise
        .then(function (res) {
          // Get total price
          var sumPrices = bookHelper.sumPrices(self.collection);

          return {
            sumPrices: sumPrices,
            bestOffer: offerHelper.getBestOffer(sumPrices, res.offers) // Get the best offer
          };
        })
        .then(function (res) {
          // Shows the details view
          detailsCompositeView.collection = self.collection;
          detailsCompositeView.commercialOffers = res;
          self.contentRegion.show(detailsCompositeView);
        });
    }
  });
});
