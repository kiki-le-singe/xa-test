define([
  'jquery',
  'marionette',
  'controllers/nav'
],

function ($, Marionette, NavController) {
  'use strict';

  describe('NavController', function () {

    // Create a div#content element and append it to the body.
    // This allows to add the views(this.controller.[*].currentView) within the "#content" region
    var $div = $('div');
    $div.attr({id: 'content'});

	beforeEach(function () {
		$('body').append($div);

		var region = new Marionette.Region({
			el: '#content'
		});

		this.controller = new NavController({contentRegion: region});
	});

	afterEach(function () {
		this.controller.destroy();
		this.controller = null;

      	$div.remove();
	});

    describe('render', function () {
	    describe('home()', function () {
			it("should render the home view", sinon.test(function () {
				var view = this.controller.home().currentView;
				var $el = view.$el;

				$el.should
					.exist.and // https://github.com/chaijs/chai-jquery#exist
					.have.class('hello-world'); // https://github.com/chaijs/chai-jquery#classclassname
			}));

			it("should contain some texts", sinon.test(function () {
				var view = this.controller.home().currentView;
				var $el = view.$el;

				$el.should.contain('CONGRATS!');
				$el.should.contain('Welcome in my "Marionette Boilerplate" project !');
				$el.should.contain('Play with this boilerplate and... Have fun!');
				$el.should.contain("Enjoy coding!");
			}));
	    });
    });
  });
});
