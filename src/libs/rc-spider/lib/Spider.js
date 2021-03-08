'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SpiderBase2 = require('./base/SpiderBase');

var _SpiderBase3 = _interopRequireDefault(_SpiderBase2);

var _shapes = require('./shapes');

var _shapes2 = _interopRequireDefault(_shapes);

var _color = require('./color');

var _color2 = _interopRequireDefault(_color);

var _reactArt = require('react-art');

var _reactArt2 = _interopRequireDefault(_reactArt);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Group = _reactArt2["default"].Group;
var Transform = _reactArt2["default"].Transform;
var Surface = _reactArt2["default"].Surface;

function defaultNodeCreator(data) {
  return _react2["default"].createElement(
    _shapes.Node,
    { margin: '10', width: '20', height: '20', data: data },
    _react2["default"].createElement(_shapes.Circle, null)
  );
}

function defaultLinkCreator(link) {
  return _react2["default"].createElement(_shapes.Link, { data: link });
}

function defaultProjection(element) {
  return [element.x, element.y];
}

function defaultTransform() {
  return new Transform();
}

var Spider = function (_SpiderBase) {
  _inherits(Spider, _SpiderBase);

  function Spider(props) {
    _classCallCheck(this, Spider);

    var _this = _possibleConstructorReturn(this, _SpiderBase.call(this, props));

    var _this$loadDataSource = _this.loadDataSource(props.dataSource, props.nodeCreator, props.linkCreator),
        nodes = _this$loadDataSource.nodes,
        links = _this$loadDataSource.links;

    _this.state = {
      dataSource: props.dataSource,
      nodes: nodes,
      links: links,
      dragging: false,
      lastX: 0,
      lastY: 0,
      left: 0,
      top: 0
    };
    return _this;
  }

  Spider.prototype.loadDataSource = function loadDataSource(dataSource, nodeCreator, linkCreator) {
    if (Object.keys(dataSource).length === 0) {
      return {
        nodes: [],
        links: []
      };
    }
    var nodes = this.nodes(dataSource);
    var links = this.links(linkCreator);

    return {
      nodes: nodes,
      links: links
    };
  };

  Spider.prototype.update = function update(id, newNode) {
    var nodes = this.state.nodes;

    var updatedNodes = nodes.set(id, newNode);
    this.setState({
      nodes: updatedNodes
    });
  };

  Spider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var dataSource = nextProps.dataSource;

    var _loadDataSource = this.loadDataSource(dataSource, nextProps.nodeCreator, nextProps.linkCreator),
        nodes = _loadDataSource.nodes,
        links = _loadDataSource.links;

    this.setState({
      dataSource: dataSource,
      nodes: nodes,
      links: links
    });
  };

  Spider.prototype.enableDrag = function enableDrag(ev) {
    var position = ev.targetTouches && ev.targetTouches[0] || ev;

    this.setState({
      dragging: true,
      lastX: position.clientX,
      lastY: position.clientY
    });
  };

  Spider.prototype.handleMouseMove = function handleMouseMove(ev) {
    var position = ev.targetTouches && ev.targetTouches[0] || ev;
    if (!this.state.dragging) {
      return;
    }
    var deltaX = position.clientX - this.state.lastX;
    var deltaY = position.clientY - this.state.lastY;
    this.setState({
      lastX: position.clientX,
      lastY: position.clientY,
      left: deltaX,
      top: deltaY
    });
  };

  Spider.prototype.handleDragStop = function handleDragStop() {
    this.setState({
      dragging: false,
      lastX: 0,
      lastY: 0,
      left: 0,
      top: 0
    });
  };

  Spider.prototype.componentDidMount = function componentDidMount() {
    if (this.props.moveable) {
      window.addEventListener('mousedown', this.enableDrag.bind(this));
      window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      window.addEventListener('mouseup', this.handleDragStop.bind(this));
    }
  };

  Spider.prototype.toggleChild = function toggleChild(node) {
    var _this2 = this;

    return function () {
      var nodes = _this2.updateNode(node, {
        expand: !node.expand
      });
      _this2.layout();
      var links = _this2.links(_this2.props.linkCreator);
      _this2.setState({
        nodes: nodes,
        links: links
      });
    };
  };

  Spider.prototype.nodeMouseOver = function nodeMouseOver() {
    _reactDom2["default"].findDOMNode(this.refs.cursorHelper).style.cursor = 'pointer';
  };

  Spider.prototype.nodeMouseOut = function nodeMouseOut() {
    _reactDom2["default"].findDOMNode(this.refs.cursorHelper).style.cursor = 'default';
  };

  Spider.prototype.renderNodes = function renderNodes() {
    var _this3 = this;

    var nodes = this.state.nodes;
    var _props = this.props,
        nodeCreator = _props.nodeCreator,
        nodeTransform = _props.nodeTransform;

    var nodeProjection = this.props.nodeProjection || this.props.projection;
    return nodes.toKeyedSeq().map(function (node) {
      var projectedNode = nodeProjection(node);
      var groupTransform = void 0;
      if (nodeTransform) {
        groupTransform = nodeTransform({
          x: projectedNode[0],
          y: projectedNode[1]
        });
      } else {
        groupTransform = new Transform().translate(projectedNode[0], projectedNode[1]);
      }
      return _react2["default"].createElement(
        Group,
        { className: 'node', key: 'node-' + node.id, transform: groupTransform,
          onMouseOver: _this3.nodeMouseOver.bind(_this3),
          onMouseOut: _this3.nodeMouseOut.bind(_this3)
        },
        node._display ? _react2["default"].Children.map(nodeCreator(node), function (children) {
          return _react2["default"].cloneElement(children, { data: node });
        }, _this3) : null
      );
    });
  };

  Spider.prototype.renderLinks = function renderLinks() {
    var _this4 = this;

    var links = this.state.links;
    var linkCreator = this.props.linkCreator;

    return links.toKeyedSeq().map(function (link, idx) {
      return _react2["default"].createElement(
        Group,
        { key: 'link-' + idx },
        _react2["default"].Children.map(linkCreator(link), _this4.passProjection, _this4)
      );
    });
  };

  Spider.prototype.passProjection = function passProjection(child) {
    var props = child.props;

    var cloneProps = {
      data: props.data,
      projection: props.projection || this.props.linkProjection || this.props.projection,
      stroke: props.stroke || this.props.stroke || window.GLOBAL_LINK_STROKE,
      strokeWidth: props.strokeWidth || this.props.strokeWidth || window.GLOBAL_LINK_STROKE_WIDTH
    };
    return _react2["default"].cloneElement(child, cloneProps);
  };

  Spider.prototype.render = function render() {
    var _props2 = this.props,
        width = _props2.width,
        height = _props2.height,
        offset = _props2.offset,
        transform = _props2.transform;
    var _state = this.state,
        left = _state.left,
        top = _state.top;


    var offsetLeft = offset && offset[0] || 0;
    var offsetTop = offset && offset[1] || 0;
    var nodes = this.renderNodes();
    var links = this.renderLinks();

    var transformFunction = transform || new Transform();
    var groupTransform = transformFunction.translate(left + offsetLeft, top + offsetTop);
    // node width
    return _react2["default"].createElement(
      'div',
      { ref: 'cursorHelper' },
      _react2["default"].createElement(
        Surface,
        { width: width, height: height, ref: 'canvas' },
        _react2["default"].createElement(
          Group,
          { transform: groupTransform },
          links.valueSeq(),
          nodes.valueSeq()
        )
      )
    );
  };

  return Spider;
}(_SpiderBase3["default"]);

Spider.propTypes = {
  offset: _propTypes2["default"].array, // 整个图的偏移
  transform: _propTypes2["default"].object, // 指定 node 的 transform
  projection: _propTypes2["default"].func, // 指定一个 node 和 link 的映射函数
  nodeProjection: _propTypes2["default"].func, // 指定 node 的映射函数
  linkProjection: _propTypes2["default"].func,
  startX: _propTypes2["default"].number,
  startY: _propTypes2["default"].number,
  enableDrag: _propTypes2["default"].bool,
  enableWheel: _propTypes2["default"].bool,
  direction: _propTypes2["default"].string,
  lineType: _propTypes2["default"].string,
  width: _propTypes2["default"].number,
  height: _propTypes2["default"].number,
  dataSource: _propTypes2["default"].object.isRequired,
  nodeCreator: _propTypes2["default"].func,
  linkCreator: _propTypes2["default"].func
};

Spider.defaultProps = {
  projection: defaultProjection,
  transform: defaultTransform(),
  nodeCreator: defaultNodeCreator,
  linkCreator: defaultLinkCreator
};

Spider.Shape = _shapes2["default"];
Spider.layout = _layout2["default"];
Spider.Transform = Transform;
Spider.Color = _color2["default"];

exports["default"] = Spider;
module.exports = exports['default'];