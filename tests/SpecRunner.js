require.config({
  baseUrl: '../app',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    underscore: 'bower_components/underscore/underscore',
    backbone: 'bower_components/backbone/backbone',
    marionette: 'bower_components/backbone.marionette/lib/core/backbone.marionette',
    'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
    handlebars: 'scripts/vendor/handlebars',
    text: 'bower_components/requirejs-text/text',
    json: 'bower_components/requirejs-plugins/src/json',
    replace: 'bower_components/require.replace/require.replace',
    chai: 'bower_components/chai/chai',
    'chai-jquery': 'bower_components/chai-jquery/chai-jquery',
    sinonjs: 'bower_components/sinonjs/sinon',
    'sinon-chai': 'bower_components/sinon-chai/lib/sinon-chai'
  },
  deps: ['jquery', 'underscore'],
  shim: {
    jquery: {
      exports: '$'
    },
    backbone: {
      deps: ['jquery', 'underscore']
    },
    marionette: {
      deps: ['backbone']
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

  chai.should();
  chai.use(chaiJquery);
  chai.use(sinonChai);

  require([
    '../tests/js/spec/views/TryTest.spec'
  ], function () {
    mocha.run();
  })

});
