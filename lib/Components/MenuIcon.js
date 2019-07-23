"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Toggle = (0, _styles.styled)("div")({
  display: "none",
  position: "relative",
  padding: "5px",
  margin: "5px 0px",
  flexDirection: "column",
  justifyContent: "center",
  top: 0,
  height: "30px",
  width: "30px",
  cursor: "pointer",
  zIndex: 10,

  "@media (max-width: 768px)": {
    display: "flex"
  }
});
var IconBarTop = (0, _styles.styled)(function (_ref) {
  var theme = _ref.theme,
      open = _ref.open,
      other = _objectWithoutProperties(_ref, ["theme", "open"]);

  return _react2.default.createElement("div", other);
})({
  height: "5px",
  background: function background(props) {
    return props.theme.text ? props.theme.text : "white";
  },
  margin: "3px 0px",
  transition: "all 0.2s ease",
  transform: function transform(props) {
    return props.open ? "rotate(-45deg) translate(-25%, 7px)" : "rotate(0deg) translate(0px, 0px)";
  }
});
var IconBarMiddle = (0, _styles.styled)(function (_ref2) {
  var theme = _ref2.theme,
      other = _objectWithoutProperties(_ref2, ["theme"]);

  return _react2.default.createElement("div", other);
})({
  height: "5px",
  background: function background(props) {
    return props.theme.text ? props.theme.text : "white";
  },
  margin: "3px 0px",
  transition: "all 0.1s ease",
  width: function width(props) {
    return props.open ? "0%" : "100%";
  }
});
var IconBarBottom = (0, _styles.styled)(function (_ref3) {
  var theme = _ref3.theme,
      open = _ref3.open,
      other = _objectWithoutProperties(_ref3, ["theme", "open"]);

  return _react2.default.createElement("div", other);
})({
  height: "5px",
  background: function background(theme) {
    return theme.text ? theme.text : "white";
  },
  margin: "3px 0px",
  transition: "all 0.2s ease",
  transform: function transform(props) {
    return props.open ? "rotate(45deg) translate(-25%, -6px)" : "rotate(0deg) translate(0px, 0px)";
  }
});

var MenuIcon = function (_Component) {
  _inherits(MenuIcon, _Component);

  function MenuIcon() {
    _classCallCheck(this, MenuIcon);

    return _possibleConstructorReturn(this, (MenuIcon.__proto__ || Object.getPrototypeOf(MenuIcon)).apply(this, arguments));
  }

  _createClass(MenuIcon, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          open = _props.open,
          onClick = _props.onClick,
          theme = _props.theme;


      return _react2.default.createElement(
        Toggle,
        { role: "button", onClick: onClick, open: open },
        _react2.default.createElement(IconBarTop, { open: open, theme: theme }),
        _react2.default.createElement(IconBarMiddle, { open: open, theme: theme }),
        _react2.default.createElement(IconBarBottom, { open: open, theme: theme })
      );
    }
  }]);

  return MenuIcon;
}(_react.Component);

MenuIcon.displayName = "MenuIcon";
exports.default = (0, _styles.withTheme)(MenuIcon);