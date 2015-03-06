define(function (require) {
  'use strict';
  return {
    'root-layout': require('hbs!templates/root-layout'),
    menu: require('hbs!templates/menu'),
    'hello-world': require('hbs!templates/hello-world'),
    libraries: require('hbs!templates/libraries'),
    library: require('hbs!templates/library')
  };
});
