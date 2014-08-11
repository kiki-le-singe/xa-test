define([
  'marionette',
  'models/helloWorld',
  'templates'
],

function (Marionette, HelloWorld, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates['hello-world'],
    className: 'hello-world',

    initialize: function () {
      console.log('initialize: helloWorldItemView');
      this.model = new HelloWorld();
    }
  });
});
