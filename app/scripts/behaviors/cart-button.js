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
      icon: '.fi-shopping-cart',
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

      $el
        .toggleClass(animateClass + ' ' + activeClass)
        // Detect When CSS3 Animations and Transitions End:
        // - http://stackoverflow.com/questions/9255279/callback-when-css3-transition-finishes?answertab=votes#tab-top
        // - http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end
        .one('webkitAnimationEnd', function () {
          $(this).removeClass(animateClass);
        });

      if ($el.hasClass(activeClass)) {
        vent.trigger('cart:add', this.model);
      }
      else {
        vent.trigger('cart:remove', this.model);
      }
    }
  });
});
