define([
  'marionette',
  '#hello/controllers/nav',
  '#hello/routers/routers',
  'vent'
],

function (Marionette, NavController, Routers, vent) {
  'use strict';

  return Marionette.Object.extend({

    initialize: function (options) {
      options = options || {};

      this.routers = new Routers({
        controller: new NavController(options)
      });

      console.log('initialize: helloIndexObject');
      vent.trigger('module:hello:bootstrapped');
    }
  });
});

// define([
//   'marionette',
//   '#hello/app',
//   'vent'
// ],
//
// function (Marionette, app, vent) {
//   'use strict';
//
//   return Marionette.Object.extend({
//
//     initialize: function (options) {
//       options = options || {};
//
//       this.app = app(options);
//       this.app.start();
//
//       console.log('initialize: helloIndexObject');
//       vent.trigger('module:hello:bootstrapped');
//     }
//   });
// });
