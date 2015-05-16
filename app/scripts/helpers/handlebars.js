define([
  'handlebars',
  'helpers/i18n'
],

function (Handlebars, i18n) {
  'use strict';

  Handlebars.registerHelper('t', i18n.t);

  // more handlebar helpers...
});
