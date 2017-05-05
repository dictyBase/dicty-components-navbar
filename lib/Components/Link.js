'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n'], ['\n  display: flex;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  color: ', ';\n  text-decoration: none;\n  margin: auto;\n  padding: 10px;\n  height: 100%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n'], ['\n  display: block;\n  color: ', ';\n  text-decoration: none;\n  margin: auto;\n  padding: 10px;\n  height: 100%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListItem = _styledComponents2.default.li(_templateObject);
var A = _styledComponents2.default.a(_templateObject2, function (props) {
  return props.theme.text ? props.theme.text : 'white';
});

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Link', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          href = _props.href;

      return _react2.default.createElement(
        ListItem,
        null,
        _react2.default.createElement(
          A,
          { href: href },
          title
        )
      );
    }
  }]);

  return Link;
}(_react.Component);

Link.displayName = 'Link';
exports.default = Link;