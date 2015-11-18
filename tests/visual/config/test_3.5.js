'use strict';

var buildPageObj = require('./_build-page-obj');

var examples = ["3.5"];

var pages = [];
examples.forEach(function (example) {
  pages.push(buildPageObj(example));
});

var testCode = require('./test_3.5_custom.js');

pages.forEach(function (page) {
  testCode(page);
});