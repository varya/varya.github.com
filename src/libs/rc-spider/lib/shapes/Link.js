'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactArt = require('react-art');

var _reactArt2 = _interopRequireDefault(_reactArt);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Util = require('../base/Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Group = _reactArt2["default"].Group;

var Shape = _reactArt2["default"].Shape;
var Transform = _reactArt2["default"].Transform;

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Link.prototype.render = function render() {
    var projection = this.props.projection;
    var _props = this.props,
        data = _props.data,
        text = _props.text,
        stroke = _props.stroke,
        strokeWidth = _props.strokeWidth,
        offset = _props.offset,
        textOffset = _props.textOffset,
        rotate = _props.rotate,
        arrow = _props.arrow;
    var source = data.source,
        target = data.target;
    // default theme style

    var pathId = 'link-path-' + source.id + '-' + target.id;
    var path = this.props.type === 'broke' ? (0, _Util.broke)(data, projection, offset) : (0, _Util.diagonal)(data, projection, offset);
    var svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('d', path.path);
    var midPoint = svgPath.getPointAtLength(Math.ceil(svgPath.getTotalLength() / 2));
    midPoint.x += parseInt(textOffset[0], 10);
    midPoint.y += parseInt(textOffset[1], 10);
    svgPath.remove();
    var points = path.points;
    var movePoint = points[points.length - 1];
    var lastPoint = points[points.length - 2];
    var alpha = Math.atan((movePoint[1] - lastPoint[1]) / (movePoint[0] - lastPoint[0])) / Math.PI * 2;
    alpha = isNaN(alpha) ? 0 : (alpha + 1) * (movePoint[0] > lastPoint[0] ? 90 : -90);
    var transform = new Transform().translate(movePoint[0], movePoint[1]).rotate(alpha);
    return _react2["default"].createElement(
      Group,
      { key: pathId },
      _react2["default"].createElement(Shape, { d: path.path, stroke: stroke, strokeWidth: strokeWidth }),
      arrow ? _react2["default"].createElement(Shape, { d: 'M-4.5,10L0.5,0L5.5,10', fill: stroke, transform: transform }) : null,
      _react2["default"].createElement(
        _Text2["default"],
        { color: stroke, offset: [midPoint.x, midPoint.y], rotate: rotate, alignment: 'middle' },
        text
      )
    );
  };

  return Link;
}(_react.Component);

Link.propTypes = {
  projection: _propTypes2["default"].func,
  data: _propTypes2["default"].object,
  offset: _propTypes2["default"].array,
  textOffset: _propTypes2["default"].array,
  text: _propTypes2["default"].string,
  stroke: _propTypes2["default"].string,
  arrow: _propTypes2["default"]["boolean"],
  strokeWidth: _propTypes2["default"].string,
  type: _propTypes2["default"].string
};

exports["default"] = Link;
module.exports = exports['default'];