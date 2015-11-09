'use strict';

var buildPageObj = require('./_build-page-obj');

var examples = ["2.2"];

var pages = [];
examples.forEach(function (example) {
  pages.push(buildPageObj(example));
});

var testCode = require('./_core-test');

pages.forEach(function (page) {
  testCode(page);
});