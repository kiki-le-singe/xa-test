define([
  'underscore'
],

function (_) {
  'use strict';

  var offerHelper = Object.create(null);

  offerHelper.percentage = function (price, offer) {
    if (!price && !offer) {
      return;
    }

    var percentageValue = this.getOfferValue('percentage', offer);
    if (!percentageValue) {
      return;
    }

    return price - ((percentageValue / 100) * price);
  };

  offerHelper.minus = function (price, offer) {
    if (!price && !offer) {
      return;
    }

    var minusValue = this.getOfferValue('minus', offer);
    if (!minusValue) {
      return;
    }

    return price - minusValue;
  };

  offerHelper.getOfferValue = function (type, offer) {
    if (!type && !offer) {
      return;
    }

    var offerType = _.pick(offer, function (value, key, object) {
      return type === object[key].type;
    });

    return _.pluck(offerType, 'value')[0];
  };

  return offerHelper;
});
