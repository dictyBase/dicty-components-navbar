var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  list-style-type: none;\n  display: flex;\n  padding: 10px;\n\n  @media (max-width: 768px) {\n    height: 30px;\n  }\n'], ['\n  list-style-type: none;\n  display: flex;\n  padding: 10px;\n\n  @media (max-width: 768px) {\n    height: 30px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  margin: auto;\n  text-decoration: none;\n  color: ', ';\n  font-size: 1.5em;\n\n  @media (max-width: 768px) {\n    top: 0;\n    z-index: 10;\n  }\n'], ['\n  display: block;\n  margin: auto;\n  text-decoration: none;\n  color: ', ';\n  font-size: 1.5em;\n\n  @media (max-width: 768px) {\n    top: 0;\n    z-index: 10;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import styled from 'styled-components';

var Container = styled.div(_templateObject);
var Link = styled.a(_templateObject2, function (props) {
  return props.theme.text ? props.theme.text : 'white';
});

var Brand = function (_Component) {
  _inherits(Brand, _Component);

  function Brand() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Brand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Brand.__proto__ || Object.getPrototypeOf(Brand)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Brand', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Brand, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          href = _props.href;

      return React.createElement(
        Container,
        null,
        React.createElement(
          Link,
          { href: href },
          title
        )
      );
    }
  }]);

  return Brand;
}(Component);

Brand.displayName = 'Brand';
export default Brand;