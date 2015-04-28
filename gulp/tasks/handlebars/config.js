'use strict';

module.exports = {
  handlebars: {
    src: {
      templates: 'app/scripts/**/[^_]*.hbs',
      partials: ['app/scripts/**/_*.hbs']
    },
    dest: 'app/scripts/'
    // dest: '.tmp/scripts/'
  }
};
