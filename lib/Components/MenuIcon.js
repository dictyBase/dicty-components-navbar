"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  return /*#__PURE__*/_react["default"].createElement("div", other);
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

  return /*#__PURE__*/_react["default"].createElement("div", other);
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

  return /*#__PURE__*/_react["default"].createElement("div", other);
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

/**
 * MenuIcon is the hamburger style icon displayed on mobile view.
 */
var MenuIcon = /*#__PURE__*/function (_Component) {
  _inherits(MenuIcon, _Component);

  var _super = _createSuper(MenuIcon);

  function MenuIcon() {
    _classCallCheck(this, MenuIcon);

    return _super.apply(this, arguments);
  }

  _createClass(MenuIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          onClick = _this$props.onClick,
          theme = _this$props.theme;
      return /*#__PURE__*/_react["default"].createElement(Toggle, {
        role: "button",
        onClick: onClick,
        open: open
      }, /*#__PURE__*/_react["default"].createElement(IconBarTop, {
        open: open,
        theme: theme
      }), /*#__PURE__*/_react["default"].createElement(IconBarMiddle, {
        open: open,
        theme: theme
      }), /*#__PURE__*/_react["default"].createElement(IconBarBottom, {
        open: open,
        theme: theme
      }));
    }
  }]);

  return MenuIcon;
}(_react.Component);

var _default = (0, _styles.withTheme)(MenuIcon);

exports["default"] = _default;