"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
  function Layout() {
    _classCallCheck(this, Layout);
  }

  Layout.prototype.size = function size(sizeArray) {
    this.size = sizeArray;
    return this;
  };

  Layout.prototype.projection = function projection(projectionFunc) {
    this.projectionFunc = projectionFunc;
    return this;
  };

  return Layout;
}();

exports["default"] = Layout;
module.exports = exports['default'];