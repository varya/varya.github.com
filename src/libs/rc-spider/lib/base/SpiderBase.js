'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataLoader = require('../dataLoader');

var _dataLoader2 = _interopRequireDefault(_dataLoader);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var SpiderBase = function (_React$Component) {
  _inherits(SpiderBase, _React$Component);

  function SpiderBase() {
    _classCallCheck(this, SpiderBase);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SpiderBase.prototype.getTreeRoot = function getTreeRoot() {
    if (this.__root) {
      return this.__root;
    }
    var data = this.__data;
    return data.nodes.find(function (node) {
      return node.__inDegree === 0;
    });
  };
  /**
   *  updateNode will always make spider relayout..
   *  otherwise manual set `relayout` attribute of attributes to `false`
   * @param targetNode
   * @param attributes
   */


  SpiderBase.prototype.updateNode = function updateNode(targetNode, attributes) {
    var nodes = this.__data.nodes;
    var nodeToUpdate = nodes.get(targetNode.id);
    _extends(nodeToUpdate.__data, attributes);
    nodeToUpdate.render(this.props.nodeCreator);
    var updatedNodes = this.__data.nodes.set(targetNode.id, nodeToUpdate);
    this.__data.nodes = updatedNodes;
    return updatedNodes;
  };

  SpiderBase.prototype.data = function data(rawData) {
    var data = (0, _dataLoader2["default"])(rawData, this);
    this.__data = data;
  };

  SpiderBase.prototype.nodes = function nodes(data) {
    this.data(data);
    return this.__data.nodes;
  };

  SpiderBase.prototype.layout = function layout() {
    this.normalizeNodes();
  };

  SpiderBase.prototype.normalizeNodes = function normalizeNodes() {
    var _this2 = this;

    var data = this.__data;
    var root = this.getTreeRoot();
    var rootX = root.x;
    var rootY = root.y;
    var boundWidth = root.rect.width;
    var boundHeight = root.rect.height;
    this.__data.nodes = data.nodes.map(function (node) {
      var x = (node.x - rootX) / boundWidth * _this2.props.width;
      var y = (node.y - rootY) / boundHeight * _this2.props.height + _this2.props.height / 2;
      node._afterLayout(x, y);
      node.controlPoints(x, y, 'horizontal');
      return node;
    });
  };

  SpiderBase.prototype.links = function links() {
    return this.__data.links;
  };

  return SpiderBase;
}(_react2["default"].Component);

SpiderBase.propTypes = {
  nodeCreator: _propTypes2["default"].func,
  width: _propTypes2["default"].any,
  height: _propTypes2["default"].any
};

exports["default"] = SpiderBase;
module.exports = exports['default'];