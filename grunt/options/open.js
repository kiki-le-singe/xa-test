'use strict';

// open app and test page
module.exports = {
  server: {
    path: 'http://localhost:<%= express.options.port %>'
  },
  docs: {
    path: '<%= yeoman.docs %>/app/scripts/init.html'
  }
};
