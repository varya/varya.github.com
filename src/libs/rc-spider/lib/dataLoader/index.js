'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = dataLoader;

var _immutable = require('immutable');

var _Node = require('../base/Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * loadArrayData
 * @param data
 * @returns {{nodes: *, links: *}}
 */
function loadArrayData(arr, spider) {
  var nodeMap = {};
  var linkMap = {};
  // 把所有节点放置到map里
  arr.forEach(function (data) {
    nodeMap[data.id] = new _Node2["default"](data, spider);
  });

  arr.forEach(function (data) {
    var currentNode = nodeMap[data.id];
    if (nodeMap[data.id] && nodeMap[data.parent]) {
      var parentNode = nodeMap[data.parent];

      var source = parentNode;
      var target = currentNode;
      var key = source.id + '-' + target.id;
      linkMap[key] = {
        source: source, target: target
      };
      parentNode.__outDegree += 1;
      parentNode.children.push(currentNode);
      currentNode.__inDegree += 1;
    }
  });
  return {
    nodes: new _immutable.Iterable(nodeMap),
    links: new _immutable.Iterable(linkMap)
  };
}
/**
 * 加载图的数据
 * @param data
 * @param spider
 */
function loadGraphData(data, spider) {
  var nodeMap = {};
  var linkMap = {};
  data.nodes.map(function (rawNode) {
    var node = new _Node2["default"](rawNode, spider);
    nodeMap[node.id] = node;
  });
  data.links.map(function (rawLink) {
    var key = rawLink.from + '-' + rawLink.to;
    var source = nodeMap[rawLink.from];
    var target = nodeMap[rawLink.to];
    linkMap[key] = _extends({
      source: source,
      target: target
    }, rawLink);
  });
  return {
    nodes: new _immutable.Iterable(nodeMap),
    links: new _immutable.Iterable(linkMap)
  };
}
/**
 * loadStructuralData
 * 加载结构化的数据
 * @param data
 * @returns {*}
 */
function loadStructuralData(data, spider) {
  var nodeMap = {};
  var linkMap = {};
  var currentData = data;

  function readNode(nodeData, parent) {
    var node = new _Node2["default"](nodeData, spider);

    nodeMap[node.id] = node;

    if (parent) {
      var source = parent;
      var target = node;
      var key = source.id + '-' + target.id;
      linkMap[key] = {
        source: source, target: target
      };
      parent.__outDegree += 1;
      node.parent = parent;
      node.__inDegree += 1;
    }

    if (nodeData.children && nodeData.children.length) {
      nodeData.children.forEach(function (child) {
        readNode(child, nodeData);
      });
    }
  }

  readNode(currentData);
  return {
    nodes: new _immutable.Iterable(nodeMap),
    links: new _immutable.Iterable(linkMap)
  };
}
/**
 * dataLoader
 * @param data
 */
function dataLoader(data, spider) {
  if (Array.isArray(data)) {
    return loadArrayData(data, spider);
  }
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data.nodes && data.links) {
    return loadGraphData(data, spider);
  }
  return loadStructuralData(data, spider);
}
module.exports = exports['default'];