'use strict';

var gemini = require('gemini');

module.exports = function (page) {
  gemini.suite(page.name, function (suite) {

    suite.skip();

  });
}
