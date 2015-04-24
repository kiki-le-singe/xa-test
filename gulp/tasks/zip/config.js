'use strict';

var pjson = require('../../../package.json');

module.exports = {
  zip: {
    archive: pjson.name + '-' + pjson.version + '.zip'
  }
};
