require([
  'backbone',
  'helpersHBS',
  'app'
],
function (Backbone, helpersHBS, App) {
  'use strict';

  App.start();
  Backbone.history.start();
});
