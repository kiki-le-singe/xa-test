require.config({

  baseUrl: '/scripts',

  /* starting point for application */
  deps: ['index'],

  shim: {
    backbone: {
      deps: ['underscore', 'jquery']
    },
    marionette: {
      deps: ['backbone']
    }
  },

  paths: {
    // modules
    '#bag': 'modules/bag',
    '#book': 'modules/book',
    '#books': 'modules/books',

    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/lodash',
    backbone: '../bower_components/backbone/backbone',

    /* alias all marionette libs */
    marionette: '../bower_components/marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',

    /* Alias text.js for template loading and shortcut the templates dir to tmpl */
    text: '../bower_components/requirejs-text/text',

    /* Helpers */
    helpersHBS: 'helpers/helpers',

    /* requirejs-plugins */
    json: '../bower_components/requirejs-plugins/src/json',

    handlebars: '../bower_components/handlebars/handlebars.runtime'
  }
});
