define([
  'models/helloWorldModel',
  'views/HelloWorldItemView',
  'templates'
],

function (HelloWorldModel, HelloWorldItemView, templates) {
  'use strict';

  describe('HelloWorldItemView', function () {

	beforeEach(function () {
		this.model = new HelloWorldModel();
		this.view = new HelloWorldItemView({
			model: this.model
		});
	});

	afterEach(function () {
		this.view.destroy();
		this.view = null;
		this.model.clear();
	});

    describe('structure', function () {

      it("should have templates['hello-world'] as template", function () {
        this.view.template.should.be.equal(templates['hello-world']);
      });

      it("should have 'hello-world' as className", function () {
        this.view.className.should.be.equal('hello-world');
      });
    });

    describe('render', function () {

	  it("should render a div element with 'hello-world' class name", sinon.test(function () {
	    var $el = this.view.render().$el;
	    $el.hasClass('hello-world').should.be.true;
	  }));

	  it("should contain some texts", sinon.test(function () {
	    var $el = this.view.render().$el;
	    $el.should.contain('CONGRATS!');
	    $el.should.contain('Welcome in my "Marionette Boilerplate" project !');
	    $el.should.contain('Play with this boilerplate and... Have fun!');
	    $el.should.contain("Enjoy coding!");
	  }));
    });
  });
});
