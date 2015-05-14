define([
  'marionette',
  'vent',
  '#books/models/booksCollection',
  '#bag/views/detailsComposite'
],

function (Marionette, vent, BooksCollection, DetailsCompositeView) {
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
      var detailsCompositeView = new DetailsCompositeView({
        collection: this.collection
      });
      this.contentRegion.show(detailsCompositeView);
    }
  });
});
