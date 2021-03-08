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

function clusterX(children) {
  return children.reduce(function (x, child) {
    return x + child.x;
  }, 0) / children.length;
}

function clusterY(children) {
  return 1 + _lodash2["default"].max(children.map(function (child) {
    return child.y;
  }));
}

function clusterLeft(node) {
  var children = node.children;
  return children && children.length ? clusterLeft(children[0]) : node;
}

function clusterRight(node) {
  var children = node.children;
  return children && children.length ? clusterRight(children[children.length - 1]) : node;
}

var Cluster = function (_LayoutBase) {
  _inherits(Cluster, _LayoutBase);

  function Cluster() {
    _classCallCheck(this, Cluster);

    return _possibleConstructorReturn(this, _LayoutBase.apply(this, arguments));
  }

  Cluster.prototype.data = function data(root) {
    var previousNode = void 0;
    var x = 0;
    var size = this.size;
    var projectionFunc = this.projectionFunc;

    (0, _Util.hierarchyVisitAfter)(root, function (node) {
      var children = node.children;
      if (children && children.length) {
        node.x = clusterX(children);
        node.y = clusterY(children);
      } else {
        node.x = previousNode ? x += (0, _Util.separation)(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = clusterLeft(root);
    var right = clusterRight(root);
    var x0 = left.x - (0, _Util.separation)(left, right) / 2;
    var x1 = right.x + (0, _Util.separation)(right, left) / 2;
    (0, _Util.hierarchyVisitAfter)(root, function (node) {
      node.x = (node.x - x0) / (x1 - x0) * size[0];
      node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];

      // projection ..
      if (projectionFunc) {
        var projectioned = projectionFunc(node);
        node.x = projectioned[0];
        node.y = projectioned[1];
      }
    });
    return root;
  };

  return Cluster;
}(_base2["default"]);

exports["default"] = Cluster;
module.exports = exports['default'];