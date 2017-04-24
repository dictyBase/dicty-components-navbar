var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n  position: relative;\n  padding: 5px;\n  margin-top: 5px;\n  flex-direction: column;\n  justify-content: center;\n  ', '\n  top: 0;\n  right: ', ';\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  transition: right 0.4s ease;\n  z-index: 10;\n  ', '\n\n  @media (max-width: 768px) {\n    display: flex;\n  }\n'], ['\n  display: none;\n  position: relative;\n  padding: 5px;\n  margin-top: 5px;\n  flex-direction: column;\n  justify-content: center;\n  ', '\n  top: 0;\n  right: ', ';\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  transition: right 0.4s ease;\n  z-index: 10;\n  ', '\n\n  @media (max-width: 768px) {\n    display: flex;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 5px;\n  background: ', ';\n  margin: 3px 0px;\n  transition: all 0.2s ease;\n  transform: ', ';\n'], ['\n  height: 5px;\n  background: ', ';\n  margin: 3px 0px;\n  transition: all 0.2s ease;\n  transform: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 5px;\n  background: ', ';\n  margin: 3px 0px;\n  transition: all 0.1s ease;\n  width: ', ';\n'], ['\n  height: 5px;\n  background: ', ';\n  margin: 3px 0px;\n  transition: all 0.1s ease;\n  width: ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';

var Toggle = styled.div(_templateObject, '' /* position: fixed; */, function (props) {
  return props.open ? '15px' : '-50px';
}, '' /* transition: all 0.4s all; */);
var IconBarTop = styled.div(_templateObject2, function (props) {
  return props.open ? props.theme.text : props.theme.primary;
}, function (props) {
  return props.open ? 'rotate(-45deg) translate(-25%, 7px)' : 'rotate(0deg) translate(0px, 0px)';
});
var IconBarMiddle = styled.div(_templateObject3, function (props) {
  return props.open ? props.theme.text : props.theme.primary;
}, function (props) {
  return props.open ? '0%' : '100%';
});
var IconBarBottom = styled.div(_templateObject2, function (props) {
  return props.open ? props.theme.text : props.theme.primary;
}, function (props) {
  return props.open ? 'rotate(45deg) translate(-25%, -6px)' : 'rotate(0deg) translate(0px, 0px)';
});

var MenuIcon = function (_Component) {
  _inherits(MenuIcon, _Component);

  function MenuIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuIcon.__proto__ || Object.getPrototypeOf(MenuIcon)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Menu Icon', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          onClick = _props.onClick;

      return React.createElement(
        Toggle,
        { role: 'button', onClick: onClick, open: open },
        React.createElement(IconBarTop, { open: open }),
        React.createElement(IconBarMiddle, { open: open }),
        React.createElement(IconBarBottom, { open: open })
      );
    }
  }]);

  return MenuIcon;
}(Component);

MenuIcon.displayName = 'MenuIcon';
export default MenuIcon;