define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.LayoutView.extend({
    el: 'body',
    template: templates['root-layout'],

    regions: {
      header: 'header',
      content: '.content',
      footer: 'footer'
    }
  });
});
