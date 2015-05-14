define([
  'marionette',
  'templates',
  '#bag/views/button'
],

function (Marionette, templates, ButtonView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: templates['bag/layout'],

    regions: {
      button: '.bag-button',
      details: '.bag-details'
    },

    onShow: function () {
      this.button.show(new ButtonView());
    }
  });
});
