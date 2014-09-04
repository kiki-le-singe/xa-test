define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['hello-world'],
    className: 'hello-world',

    initialize: function () {
      console.log('initialize: helloWorldItemView');
    }
  });
});
