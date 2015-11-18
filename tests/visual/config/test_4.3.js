'use strict';

var buildPageObj = require('./_build-page-obj');

var examples = ["4.3"];

var pages = [];
examples.forEach(function (example) {
  pages.push(buildPageObj(example));
});

var testCode = require('./test_4.3_custom.js');

pages.forEach(function (page) {
  testCode(page);
});