'use strict';

var gemini = require('gemini');

module.exports = function (page) {
  gemini.suite(page.name, function (suite) {

    suite.ignoreElements('.recent-posts__item:nth-child(1) .badge', '.recent-posts__item:nth-child(2) .badge');

    suite.setUrl(page.url).setCaptureElements('body').capture('plain', function (actions, find) {

      actions.waitForElementToShow('shadow-dom', 7000);
      actions.executeJS(function(window) {
        window.alert('Hello!');
      });
      actions.wait(500);

    });

  });
}
