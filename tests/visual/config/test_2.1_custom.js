'use strict';

var gemini = require('gemini');

module.exports = function (page) {
  gemini.suite(page.name, function (suite) {

    suite.ignoreElements('.header__left', '.header__right');

    suite.setUrl(page.url).setCaptureElements('body').capture('plain', function (actions, find) {

      actions.waitForElementToShow('shadow-dom', 7000);
      actions.wait(500);

    });

  });
}
