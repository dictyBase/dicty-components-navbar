'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 0;\n  position: relative;\n  background: ', ';\n  transition: all 0.2s ease;\n\n  @media (max-width: 768px) {\n    align-items: initial;\n    width: 100%;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 0;\n  position: relative;\n  background: ', ';\n  transition: all 0.2s ease;\n\n  @media (max-width: 768px) {\n    align-items: initial;\n    width: 100%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  cursor: pointer;\n  padding: 0px 20px 0px 10px;\n  transition: transform 0.3s ease, top 0.3s ease, bottom 0.3s ease;\n  color: ', ';\n  line-height: ', ';\n\n  @media (max-width: 768px) {\n    line-height: initial;\n    position: relative;\n    margin: 0;\n    padding: 10px 20px 10px 10px;\n  }\n\n  &::after {\n    content: \'\';\n    position: absolute;\n    top: ', ';\n    bottom: 0;\n    right: 5px;\n    margin: auto;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid ', ';\n    transform: ', ';\n    transform-origin: top;\n    transition: inherit;\n\n    @media (max-width: 768px) {\n      top: ', ';\n      right: 25px;\n      bottom: ', ';\n      top: none;\n    }\n  }\n'], ['\n  display: block;\n  cursor: pointer;\n  padding: 0px 20px 0px 10px;\n  transition: transform 0.3s ease, top 0.3s ease, bottom 0.3s ease;\n  color: ', ';\n  line-height: ', ';\n\n  @media (max-width: 768px) {\n    line-height: initial;\n    position: relative;\n    margin: 0;\n    padding: 10px 20px 10px 10px;\n  }\n\n  &::after {\n    content: \'\';\n    position: absolute;\n    top: ', ';\n    bottom: 0;\n    right: 5px;\n    margin: auto;\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid ', ';\n    transform: ', ';\n    transform-origin: top;\n    transition: inherit;\n\n    @media (max-width: 768px) {\n      top: ', ';\n      right: 25px;\n      bottom: ', ';\n      top: none;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 100%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  height: 0px;\n  min-width: calc(100% - 2px);\n  width: auto;\n  overflow: hidden;\n  list-style-type: none;\n  transition: all 0.2s ease;\n  background: white;\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n  border-bottom-width: ', ';\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);\n  z-index: 10000;\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    position: relative;\n    top: 0;\n    border: none;\n    color: ', ';\n    box-shadow: none;\n    background: ', ';\n  }\n'], ['\n  position: absolute;\n  top: 100%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  height: 0px;\n  min-width: calc(100% - 2px);\n  width: auto;\n  overflow: hidden;\n  list-style-type: none;\n  transition: all 0.2s ease;\n  background: white;\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n  border-bottom-width: ', ';\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);\n  z-index: 10000;\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    position: relative;\n    top: 0;\n    border: none;\n    color: ', ';\n    box-shadow: none;\n    background: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  color: ', ';\n  ', '\n  transition: all 0.14s ease;\n\n  &:hover {\n    color: white;\n    background: ', ';\n  }\n\n  @media (max-width: 768px) {\n    color: white;\n  }\n'], ['\n  position: relative;\n  color: ', ';\n  ', '\n  transition: all 0.14s ease;\n\n  &:hover {\n    color: white;\n    background: ', ';\n  }\n\n  @media (max-width: 768px) {\n    color: white;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  color: inherit;\n  padding: 10px 10px 10px 5px;\n  display: block;\n\n  @media (max-width: 768px) {\n    padding: 10px 0px 10px 40px;\n  }\n'], ['\n  text-decoration: none;\n  color: inherit;\n  padding: 10px 10px 10px 5px;\n  display: block;\n\n  @media (max-width: 768px) {\n    padding: 10px 0px 10px 40px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Menu = _styledComponents2.default.ul(_templateObject, function (props) {
  return props.open && props.theme.secondary ? props.theme.secondary : 'transparent';
});
var Toggle = _styledComponents2.default.li(_templateObject2, function (props) {
  return props.theme.text ? props.theme.text : 'white';
}, function (props) {
  return props.theme.height ? props.theme.height : '50px';
}, function (props) {
  return props.open ? '9px' : '0px';
}, function (props) {
  return props.theme.text ? props.theme.text : 'white';
}, function (props) {
  return props.open ? 'rotateX(180deg)' : 'rotateX(0deg)';
}, function (props) {
  return props.open ? '19px' : '11px';
}, function (props) {
  return props.open ? '11px' : '10px';
});
var List = _styledComponents2.default.ul(_templateObject3, function (props) {
  return props.theme.secondary ? props.theme.secondary : '#333';
}, function (props) {
  return props.theme.secondary ? props.theme.secondary : '#333';
}, function (props) {
  return props.theme.secondary ? props.theme.secondary : '#333';
}, function (props) {
  return props.open ? '1px' : '0px';
}, function (props) {
  return props.theme.secondary ? props.theme.secondary : 'black';
}, function (props) {
  return props.theme.primary ? props.theme.primary : '#15317e';
});
var Item = _styledComponents2.default.li(_templateObject4, function (props) {
  return props.theme.primary ? props.theme.primary : 'black';
}, '' /* background-size: 0px 0px; */, function (props) {
  return props.theme.secondary ? props.theme.secondary : '#15317e';
});
var Link = _styledComponents2.default.a(_templateObject5);

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    _this.displayName = 'Dropdown';

    _this.close = function () {
      (0, _dom.transitionFromAuto)(_this.list, 0);
    };

    _this.open = function () {
      (0, _dom.transitionToAuto)(_this.list);
    };

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          changeDropdown = _this$props.changeDropdown,
          index = _this$props.index;
      var width = _this.state.width;

      if (open) {
        // If dropdown is clicked while open, set Navbar's activeIndex to -1
        // to signify that all dropdowns are currently closed
        changeDropdown(-1);
      } else {
        changeDropdown(index);
      }
    };

    _this.handleDocumentClick = function (e) {
      var _this$props2 = _this.props,
          changeDropdown = _this$props2.changeDropdown,
          open = _this$props2.open;

      if (!(0, _dom.wasClicked)(e, _this.menu) && open) {
        e.stopImmediatePropagation();
        _this.close();
        changeDropdown(-1);
        return;
      }
    };

    _this.renderItems = function () {
      var items = _this.props.items;

      items = items.map(function (item, i) {
        return _react2.default.createElement(
          Item,
          { key: i },
          _react2.default.createElement(
            Link,
            { href: item.href },
            item.name
          )
        );
      });
      return items;
    };

    _this.state = {
      width: null
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        width: getComputedStyle(this.list).width
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var open = nextProps.open;

      if (open) {
        this.open();
      } else if (!open) {
        this.close();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          open = _props.open;
      var width = this.state.width;

      return _react2.default.createElement(
        Menu,
        { open: open, innerRef: function innerRef(el) {
            return _this2.menu = el;
          }, width: width },
        _react2.default.createElement(
          Toggle,
          { onClick: this.handleClick, open: open, width: width },
          title
        ),
        _react2.default.createElement(
          List,
          { open: open, innerRef: function innerRef(el) {
              return _this2.list = el;
            } },
          this.renderItems()
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.displayName = 'Dropdown';
exports.default = Dropdown;