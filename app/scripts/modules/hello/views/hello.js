define([
  'marionette',
  '#hello/templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.hello,

    initialize: function () {
      console.log('initialize: helloView');
    }
  });
});
