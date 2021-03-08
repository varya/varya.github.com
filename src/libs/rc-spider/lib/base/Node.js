'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _global = require('./global');

var _global2 = _interopRequireDefault(_global);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLOBAL_NODE_WIDTH = _global2["default"].GLOBAL_NODE_WIDTH,
    GLOBAL_NODE_HEIGHT = _global2["default"].GLOBAL_NODE_HEIGHT,
    GLOBAL_NODE_MARGIN = _global2["default"].GLOBAL_NODE_MARGIN;
/**
 * class Node
 *
 * A node has :
 */

var Node = function () {
  function Node(data, spider) {
    _classCallCheck(this, Node);

    _extends(this, data);
    this.x = Number(this.x);
    this.y = Number(this.y);
    this.controlPoints(this.x, this.y, 'horizontal');
    this.id = data.id || _uuid2["default"].v1();
    this.__data = data;
    this.__inDegree = 0;
    this.__outDegree = 0;
    this.__spider = spider;
    // this.render( nodeCreator );
    this.expand = data.expand || true;
    this._display = this.expand;
    this.children = [];
    data.id = data.id || this.id;
    data.expand = data.expand === undefined || data.expand === null ? this.expand : data.expand;
  }

  Node.prototype.render = function render(nodeCreator) {
    var data = this.__data;
    this._key = _uuid2["default"].v1();
    this._el = nodeCreator(data, this.__spider);
    this.__width = Number(data.width || this._el.props.width) || GLOBAL_NODE_WIDTH;
    this.__height = Number(data.height || this._el.props.height) || GLOBAL_NODE_HEIGHT;
    this.__margin = Number(this._el.props.margin) || GLOBAL_NODE_MARGIN;
    this.entry_radius = this._el.props.entry_radius || 0;
    this.exit_radius = this._el.props.exit_radius || 0;
    this.expand = data.expand === undefined || data.expand === null ? this.expand : data.expand;
    return this._el;
  };

  Node.prototype.isRoot = function isRoot() {
    return !this.__inDegree;
  };

  Node.prototype.isLeaf = function isLeaf() {
    return !this.__outDegree;
  };

  Node.prototype.getDegree = function getDegree() {
    return this.__inDegree + this.__outDegree;
  };

  Node.prototype.getEntryRadius = function getEntryRadius(direction) {
    return Number(this.entry_radius || (direction === 'vertical' ? this.__height / 2 : this.__width / 2));
  };

  Node.prototype.getExitRadius = function getExitRadius(direction) {
    return Number(this.exit_radius || (direction === 'vertical' ? this.__height / 2 : this.__width / 2));
  };

  Node.prototype.show = function show() {
    this._display = true;
  };

  Node.prototype.hide = function hide() {
    this._display = false;
  };

  Node.prototype.controlPoints = function controlPoints(x, y, direction) {
    var entryRadius = this.getEntryRadius(direction);
    var exitRadius = this.getExitRadius(direction);

    this.i_x = this.o_x = x;
    this.i_y = this.o_y = y;
    if (direction === 'vertical') {
      if (entryRadius) {
        this.i_x = x;
        this.i_y = y - entryRadius;
      }

      if (exitRadius) {
        this.o_x = x;
        this.o_y = y + exitRadius;
      }
    } else {
      if (entryRadius) {
        this.i_x = x - entryRadius;
        this.i_y = y;
      }

      if (exitRadius) {
        this.o_x = x + exitRadius;
        this.o_y = y;
      }
    }
  };

  Node.prototype._afterLayout = function _afterLayout(x, y) {
    this.x = x;
    this.y = y;
  };

  Node.prototype._afterChildrenLayout = function _afterChildrenLayout(x, y) {
    this.x = x;
    this.y = y;
  };

  Node.prototype.get = function get(key) {
    return this.__data[key];
  };

  Node.prototype.set = function set(target) {
    // avoid to modify id of node
    if (target.id) {
      delete target.id;
    }
    _extends(this, target);
    this.__spider.update(this.id, this);
  };

  return Node;
}();

exports["default"] = Node;
module.exports = exports['default'];