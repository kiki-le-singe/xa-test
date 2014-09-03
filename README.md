# Marionette Boilerplate

## Introduction

> This project is first to train with tools like [GruntJS](http://gruntjs.com/), [Yeoman](http://yeoman.io/), [Backbone.js](http://backbonejs.org/), [Marionette.js](http://marionettejs.com/)... And then I used it like Boilerplate.

## Requirements

 * [nodejs](http://nodejs.org/)
 * [Mongodb](http://www.mongodb.org/)
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 * [GruntJS](http://gruntjs.com/)
 * [bower](http://bower.io/)
 * [compass](http://compass-style.org/): **Only for build**

## Optional

 * [Yeoman](http://yeoman.io/): **required by [generator-marionette](https://github.com/mrichard/generator-marionette)**
 * [generator-marionette](https://github.com/mrichard/generator-marionette): Allows the use of **yo** command to generate **routers**, **models**, **views** ...

## Installation

* `$ git clone git@github.com/kiki-le-singe/read-list.git`
* `$ cd read-list`
* `$ npm install`
* `$ bower install`

## Grunt tasks

* `$ grunt serve`

Then serve the app on `localhost:9000` and opens your default browser

* `$ grunt test`

Runs tests located in `/tests/js/spec`.

## Included JavaScript libraries

 * [Backbone.js](http://backbonejs.org/)
 * [Marionette.js](http://marionettejs.com/)
 * [Backbone.babysitter](https://github.com/marionettejs/backbone.babysitter)
 * [Backbone.wreqr](https://github.com/marionettejs/backbone.wreqr)
 * [Require.js](http://requirejs.org/)
 * [jQuery 2](http://jquery.com/)
 * [Lo-Dash](http://lodash.com/)
 * [Handlebars](http://handlebarsjs.com/)
 * [Modernizr](http://modernizr.com/)

## API

By default the root access for the API is http://localhost:9000/api. Available example: http://localhost:9000/api/articles

## Tests

The library used for tests are :

 * [mocha](http://visionmedia.github.io/mocha/)
 * [sinon](http://sinonjs.org/)
 * [chai](http://chaijs.com/)

## Sources

 * [Yeoman](http://yeoman.io/)
 * [generator-marionette](https://github.com/mrichard/generator-marionette): **My Boilerplate** is based on it
