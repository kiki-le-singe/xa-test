define([
  'marionette',
  'vent',
  'templates'
],

function (Marionette, vent, templates) {
  'use strict';

  return Marionette.Behavior.extend({
    defaults: {
      template: templates['ui/button/cart'],
      container: '.panel',
      icon: '.fi-shopping-bag',
      activeClass: 'icon-on',
      animateClass: 'rubberBand'
    },

    events: {
      'click @ui.icon': 'updateCart'
    },

    initialize: function () {
      this.ui.icon = this.getOption('icon');
      this.model = this.view.options.model || this.options.model;

      if (!this.model) {
        throw new Error('Cannot use cart button on view without a model');
      }
    },

    onRender: function () {
      this.$(this.getOption('container')).append(this.getOption('template'));
    },

    updateCart: function () {
      var animateClass = this.getOption('animateClass');
      var activeClass = this.getOption('activeClass');
      var $el = this.$(this.getOption('icon'));

      $el.toggleClass(animateClass + ' ' + activeClass);

      if ($el.hasClass(activeClass)) {
        vent.trigger('cart:add', this.model);
      }
      else {
        vent.trigger('cart:remove', this.model);
      }
    }
  });
});
