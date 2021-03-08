'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = require('../base/Util');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Tree = function (_LayoutBase) {
  _inherits(Tree, _LayoutBase);

  function Tree() {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, _LayoutBase.call(this));

    _this.levelIndexes = [];
    _this.maxDeep = 0;
    _this.minX = 0;
    _this.maxX = 0;
    return _this;
  }

  Tree.prototype.walkLevel = function walkLevel(node) {
    var _this2 = this;

    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (this.levelIndexes.length < level + 1) {
      this.levelIndexes.push([]);
    }

    var indexes = this.levelIndexes[level];
    indexes.push(node);
    if (!node.children || node.children.length === 0) {
      node.__depth = 1;
    } else {
      node.children.forEach(function (child) {
        return _this2.walkLevel(child, level + 1);
      });
      node.__depth = _lodash2["default"].max(node.children.map(function (child) {
        return child.__depth;
      })) + 1;
    }
    this.maxDeep = Math.max(node.__depth, this.maxDeep);
    node.__left_bound = new Float32Array(node.__depth);
    node.__right_bound = new Float32Array(node.__depth);
  };

  Tree.prototype.walkRelative = function walkRelative() {
    var _this3 = this;

    for (var level = this.levelIndexes.length - 1; level >= 0; level--) {
      var nodes = this.levelIndexes[level];
      nodes.forEach(function (node) {
        if (node.__depth === 1) {
          node.__left_bound[0] = -1;
          node.__right_bound[0] = 1;
        } else {
          _this3.move(node.children, node);
        }
      });
    }
  };

  Tree.prototype.move = function move(children, node) {
    var activeNode = children[0];
    var firstNode = children[0];
    var mLevel = void 0;
    var cLevel = void 0;
    var leftBounds = void 0;
    var rightBounds = void 0;

    var firstNodeLeftBound = firstNode.__left_bound;
    var firstNodeRightBound = firstNode.__right_bound;
    var len = children.length - 1;

    var _len = node.__depth - 1;
    var left = new Float32Array(_len);
    var right = new Float32Array(_len);

    var maxR = void 0;
    var tmp = void 0;

    left.fill(0xfffffff0);

    firstNode.x = 0;

    for (var j = 0; j < firstNode.__depth; j++) {
      right[j] = firstNodeRightBound[j];
      left[j] = firstNodeLeftBound[j];
    }

    mLevel = firstNode.__depth;

    for (var i = 0; i <= len; i++) {
      activeNode = children[i];
      cLevel = mLevel > activeNode.__depth ? activeNode.__depth : mLevel;
      mLevel = mLevel > activeNode.__depth ? mLevel : activeNode.__depth;

      leftBounds = activeNode.__left_bound;
      rightBounds = activeNode.__right_bound;
      maxR = 0;

      for (var _j = 0; _j < cLevel; _j++) {
        tmp = right[_j] - leftBounds[_j];
        if (maxR < tmp) {
          maxR = tmp;
        }
      }

      activeNode.x = maxR;

      for (var _j2 = 0; _j2 < activeNode.__depth; _j2++) {
        right[_j2] = maxR + rightBounds[_j2];
        tmp = maxR + leftBounds[_j2];
        if (tmp < left[_j2]) {
          left[_j2] = tmp;
        }
      }
    }

    var center = (children[len].x + children[0].x) / 2;
    children.forEach(function (child) {
      return child.x -= center;
    });

    var currentRightBounds = node.__right_bound;
    var currentLeftBounds = node.__left_bound;
    currentLeftBounds[0] = -1;
    currentRightBounds[0] = 1;
    for (var _j3 = 1; _j3 < node.__depth; _j3++) {
      currentRightBounds[_j3] = right[_j3 - 1] - center;
      currentLeftBounds[_j3] = left[_j3 - 1] - center;
    }
  };

  Tree.prototype.walkAbsolute = function walkAbsolute(ele, px) {
    var _this4 = this;

    var children = ele.children;
    if (children && children.length) {
      children.forEach(function (child) {
        var x = child.x || 0;
        x = x + px;
        child.x = x;
        _this4.minX = Math.min(_this4.minX, x);
        _this4.maxX = Math.max(_this4.maxX, x);
        if (child.children && child.children.length) {
          _this4.walkAbsolute(child, x);
        }
      });
    }
  };

  Tree.prototype.data = function data(root) {
    var _this5 = this;

    var size = this.size;
    var projectionFunc = this.projectionFunc;

    root.x = 0;
    root.y = 0;

    this.walkLevel(root);
    this.walkRelative();
    this.walkAbsolute(root, 0);

    var x0 = this.minX - 1;
    var x1 = this.maxX + 1;
    (0, _Util.hierarchyVisitAfter)(root, function (node) {
      node.x = (node.x - x0) / (x1 - x0) * size[0];
      node.y = (node.__level__ ? node.__level__ / _this5.maxDeep : 0) * size[1];

      if (projectionFunc) {
        var projectioned = projectionFunc(node);
        node.x = projectioned[0];
        node.y = projectioned[1];
      }
    });
    return root;
  };

  return Tree;
}(_base2["default"]);

exports["default"] = Tree;
module.exports = exports['default'];