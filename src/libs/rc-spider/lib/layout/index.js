'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var layout = {};

['cluster', 'tree'].forEach(function (item) {
  var LayoutClass = require('./' + item);
  layout[item] = function () {
    return new LayoutClass();
  };
});

exports["default"] = layout;
module.exports = exports['default'];