define([
  'superagent',
  'bluebird',
  'json!#books/config/api.json',
  'vent'
],

function (request, Promise, api, vent) {
  'use strict';

  return function (options) {
    options = options || {};

    var getCommercialOffers = function (collection) {
      var isbn = collection.pluck('isbn').join(',');
      var apiCommercialOffers = api.commercialOffers.replace(':isbn', isbn);

      return new Promise(function (resolve, reject) {
        request
          .get(apiCommercialOffers)
          .end(function (err, res) {
            if (200 === res.status && res.body) {
              resolve(res.body);
            }
            else {
              console.log('error', err);
              reject();
            }
          });
      });
    };

    vent.reply('books:get:commercialOffers', getCommercialOffers);
  };
});
