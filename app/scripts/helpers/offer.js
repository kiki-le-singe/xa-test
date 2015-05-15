define([
  'underscore'
],

function (_) {
  'use strict';

  var offerHelper = Object.create(null);

  offerHelper.percentage = function (price, offers) {
    if (!price || !offers) {
      return;
    }

    var value = this.getOfferValue('percentage', offers);
    if (!value) {
      return;
    }

    return price - ((value / 100) * price);
  };

  offerHelper.minus = function (price, offers) {
    if (!price || !offers) {
      return;
    }

    var value = this.getOfferValue('minus', offers);
    if (!value) {
      return;
    }

    return price - value;
  };

  offerHelper.slice = function (price, offers) {
    if (!price || !offers) {
      return;
    }

    var value = this.getOfferValue('slice', offers);
    var sliceValue = this.getSliceValue(offers);
    if (!value || !sliceValue) {
      return;
    }
    else if (sliceValue > price) {
      return;
    }

    var result = Math.floor(price / sliceValue) * value;
    return price - result;
  };

  offerHelper.getSliceValue = function (offers) {
    if (!offers) {
      return;
    }

    var slice = this.pickOffer('slice', offers);
    return _.pluck(slice, 'sliceValue')[0];
  };

  offerHelper.getOfferValue = function (type, offers) {
    if (!type || !offers) {
      return;
    }

    var offer = this.pickOffer(type, offers);
    return _.pluck(offer, 'value')[0];
  };

  offerHelper.pickOffer = function (type, offers) {
    if (!type || !offers) {
      return;
    }

    return _.pick(offers, function (value, key, object) {
      return type === object[key].type;
    });
  };

  offerHelper.getBestOffer = function (price, offers) {
    if (!price || !offers) {
      return;
    }

    var percentage = this.percentage(price, offers);
    var minus = this.minus(price, offers);
    var slice = this.slice(price, offers);

    return _.min([percentage, minus, slice]);
  };

  return offerHelper;
});
