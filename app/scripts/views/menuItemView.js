define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.menu,
    tagName: 'menu',
    id: 'menu',

    initialize: function () {
      console.log('initialize: menuItemView');
    }
  });
});
