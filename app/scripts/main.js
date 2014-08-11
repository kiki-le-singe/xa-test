require([
	'backbone',
	'app'
],
function (Backbone, App) {
  'use strict';

	App.start();
  Backbone.history.start();
});
