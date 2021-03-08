'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _reactArt = require('react-art');

var _reactArt2 = _interopRequireDefault(_reactArt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Transform = _reactArt2["default"].Transform;
var ArtText = _reactArt2["default"].Text;

var Text = function (_Shape) {
  _inherits(Text, _Shape);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Text.prototype.render = function render() {
    var _props = this.props,
        offset = _props.offset,
        children = _props.children,
        color = _props.color,
        transform = _props.transform,
        rotate = _props.rotate,
        alignment = _props.alignment,
        size = _props.size;


    var textTransform = transform || new Transform();
    textTransform.translate(offset[0], offset[1]);
    rotate && textTransform.rotate(rotate);
    return _react2["default"].createElement(
      ArtText,
      { transform: textTransform, fill: color,
        alignment: alignment || 'left',
        font: { fontSize: size, fontWeight: 100 }
      },
      children
    );
  };

  return Text;
}(_Shape3["default"]);

Text.defaultProps = {
  offset: [0, 0]
};
exports["default"] = Text;
module.exports = exports['default'];