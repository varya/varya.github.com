'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _reactArt = require('react-art');

var _reactArt2 = _interopRequireDefault(_reactArt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Group = _reactArt2["default"].Group;
var Transform = _reactArt2["default"].Transform;

var Node = function (_Shape) {
  _inherits(Node, _Shape);

  function Node() {
    _classCallCheck(this, Node);

    return _possibleConstructorReturn(this, _Shape.apply(this, arguments));
  }

  Node.prototype.renderTreeNode = function renderTreeNode(child, index) {
    var props = this.props;
    var cloneProps = {
      key: child.props.key || index,
      width: child.props.width || props.width,
      height: child.props.height || props.height,
      fill: child.props.fill || props.fill || window.NODE_DEFAULT_FILL,
      stroke: child.props.stroke || props.stroke || window.NODE_DEFAULT_STROKE,
      strokeWidth: child.props.strokeWidth || props.strokeWidth || window.NODE_DEFAULT_STROKE_WIDTH
    };
    if (child.type.name === 'Circle') {
      cloneProps.radius = child.props.radius || Math.min(cloneProps.width, cloneProps.height);
    }
    if (child.type.name === 'Text') {
      cloneProps.color = child.props.color || props.fill || window.TEXT_DEFAULT_COLOR;
    }

    return _react2["default"].cloneElement(child, cloneProps);
  };

  Node.prototype.nodeClick = function nodeClick() {
    if (this.props.onClick) {
      this.props.onClick.call(this, this.props.data.__data);
    }
  };

  Node.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        offset = _props.offset;

    var groupTransform = new Transform();
    groupTransform.translate(offset[0], offset[1]);
    return _react2["default"].createElement(
      Group,
      { className: 'node', transform: groupTransform, onClick: this.nodeClick.bind(this) },
      _react2["default"].Children.map(children, this.renderTreeNode, this)
    );
  };

  return Node;
}(_Shape3["default"]);

Node.propTypes = {
  width: _propTypes2["default"].any.isRequired,
  height: _propTypes2["default"].any.isRequired
};

exports["default"] = Node;
module.exports = exports['default'];