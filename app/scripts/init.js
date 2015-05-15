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
    marionette: '../bower_components/marionette/lib/core/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    text: '../bower_components/requirejs-text/text',
    helpers: 'helpers',
    helpersHBS: 'helpers/handlebars',
    superagent: '../bower_components/superagent/superagent',
    bluebird: '../bower_components/bluebird/js/browser/bluebird',
    json: '../bower_components/requirejs-plugins/src/json',
    handlebars: '../bower_components/handlebars/handlebars.runtime'
  }
});
