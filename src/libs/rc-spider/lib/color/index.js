'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpiderColor = function () {
  function SpiderColor() {
    _classCallCheck(this, SpiderColor);
  }

  SpiderColor.prototype.darken = function darken(colorString, alpha) {
    return (0, _color2["default"])(colorString).darken(alpha).hexString();
  };

  return SpiderColor;
}();

exports["default"] = new SpiderColor();
module.exports = exports['default'];