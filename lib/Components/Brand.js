"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = (0, _styles.styled)("div")({
  listStyleType: "none",
  display: "flex",
  padding: "10px",
  "@media (maxWidth: 768px)": {
    height: "30px"
  }
});
var Link = (0, _styles.styled)(function (_ref) {
  var theme = _ref.theme,
      other = _objectWithoutProperties(_ref, ["theme"]);

  return /*#__PURE__*/_react["default"].createElement("a", other);
})({
  display: "block",
  margin: "auto",
  textDecoration: "none",
  color: function color(props) {
    return props.theme.text ? props.theme.text : "white";
  },
  fontSize: "1.5em",
  "@media (max-width: 768px)": {
    top: 0,
    zIndex: 10
  }
});

/**
 * Brand creates a "brand" item in the navbar.
 */
var Brand = function Brand(props) {
  var title = props.title,
      href = props.href,
      theme = props.theme;
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Link, {
    theme: theme,
    href: href
  }, title));
};

var _default = (0, _styles.withTheme)(Brand);

exports["default"] = _default;