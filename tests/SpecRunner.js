require.config({
  baseUrl: '../app/scripts',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/dist/lodash',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    handlebars: '../bower_components/require-handlebars-plugin/Handlebars',
    hbs: '../bower_components/requirejs-hbs/hbs',
    text: '../bower_components/requirejs-text/text',
    tmpl: '../templates',
    json: '../bower_components/requirejs-plugins/src/json',
    tests: '../../tests',
    chai: '../bower_components/chai/chai',
    'chai-jquery': '../bower_components/chai-jquery/chai-jquery',
    sinonjs: '../bower_components/sinonjs/sinon',
    'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai'
  },
  deps: ['jquery', 'underscore'],
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore']
    },
    chai: {
      deps: ['jquery'],
      exports: 'chai'
    },
    'chai-jquery': {
      deps: ['chai']
    },
    'sinon-chai': {
      deps: ['sinonjs']
    }
  }
});

require([
  'require',
  'marionette',
  'chai',
  'chai-jquery',
  'sinonjs',
  'sinon-chai'
],
function (require, Marionette, chai, chaiJquery, sinon, sinonChai) {
  'use strict';

  chai.should();
  chai.use(chaiJquery);
  chai.use(sinonChai);

  require([
    'tests/js/spec/controllers/nav.spec',
    'tests/js/spec/views/helloWorldItemView.spec'
  ], function () {

    mocha.run();
  });

});
