define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.nav,
    tagName: 'nav',
    className: 'top-bar',

    initialize: function () {
      console.log('initialize: menuItemView');
    }
  });
});