define([
	'marionette',
	'controllers/nav',
	'routers/routers',
	'vent',
	'templates'
],

function (Marionette, NavController, Routers, Vent, templates) {
  'use strict';

	var App = new Marionette.Application();

	/* Add application regions here */
	App.addRegions({
		header: '#header',
		content: '#content',
		footer: '#footer'
	});

	/* Add initializers here */
	App.addInitializer(function () {
		this.routers = new Routers({
			controller: new NavController({contentRegion: App.content})
		});
		Vent.trigger("APP:START");
	});

	return App;
});
