define([
	'marionette',
	'views/helloWorldItemView',
	'vent',
	'templates'
],

function (Marionette, HelloWorldItemView, Vent, templates) {
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
		App.content.show(new HelloWorldItemView());
		Vent.trigger("APP:START");
	});

	return App;
});
