'use strict';

var gemini = require('gemini');

module.exports = function (page) {
  gemini.suite(page.name, function (suite) {

    suite.setUrl(page.url).setCaptureElements('body').capture('plain', function (actions, find) {

      actions.waitForElementToShow('.github__repo', 7000);
      actions.wait(500);

    });

  });
}
