'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _Circle = require('react-art/Circle');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Circle.prototype.render = function render() {
    var _props = this.props,
        radius = _props.radius,
        fill = _props.fill,
        stroke = _props.stroke,
        strokeWidth = _props.strokeWidth,
        onClick = _props.onClick;

    return _react2["default"].createElement(_Circle2["default"], { radius: Number(radius), fill: fill,
      stroke: stroke, strokeWidth: strokeWidth,
      onClick: onClick
    });
  };

  return Circle;
}(_Shape3["default"]);

exports["default"] = Circle;
module.exports = exports['default'];