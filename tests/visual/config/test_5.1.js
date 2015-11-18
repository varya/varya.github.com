'use strict';

var buildPageObj = require('./_build-page-obj');

var examples = ["5.1"];

var pages = [];
examples.forEach(function (example) {
  pages.push(buildPageObj(example));
});

var testCode = require('./test_5.1_custom.js');

pages.forEach(function (page) {
  testCode(page);
});