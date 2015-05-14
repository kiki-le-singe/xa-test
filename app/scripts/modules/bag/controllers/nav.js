define([
  'marionette',
  'vent',
  '#books/models/booksCollection'
],

function (Marionette, vent, BooksCollection) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.collection = new BooksCollection();

      vent.on('cart:add', this.addBag, this);
      vent.on('cart:remove', this.removeBag, this);
      vent.on('bag:show', this.showBag, this);
    },

    onDestroy: function () {
      vent.off('cart:add', this.addBag, this);
      vent.off('cart:remove', this.removeBag, this);
      vent.off('bag:show', this.showBag, this);
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
      debugger
    }
  });
});
