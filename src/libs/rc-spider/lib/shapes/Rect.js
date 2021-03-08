'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactArt = require('react-art');

var _reactArt2 = _interopRequireDefault(_reactArt);

var _Rectangle = require('react-art/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Group = _reactArt2["default"].Group;
var Transform = _reactArt2["default"].Transform;

var Rect = function (_Shape) {
  _inherits(Rect, _Shape);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Rect.prototype.render = function render() {
    var _props = this.props,
        offset = _props.offset,
        transform = _props.transform,
        width = _props.width,
        height = _props.height,
        color = _props.color,
        radius = _props.radius,
        stroke = _props.stroke,
        strokeWidth = _props.strokeWidth;

    var rectTransform = transform || new Transform();
    rectTransform.translate(offset[0], offset[1]);
    return _react2["default"].createElement(
      Group,
      null,
      _react2["default"].createElement(_Rectangle2["default"], {
        transform: rectTransform,
        radius: radius,
        width: width,
        height: height,
        stroke: stroke,
        fill: color,
        strokeWidth: strokeWidth
      }),
      this.props.children
    );
  };

  return Rect;
}(_Shape3["default"]);

_react2["default"].defaultProps = {
  radius: 0
};

exports["default"] = Rect;
module.exports = exports['default'];