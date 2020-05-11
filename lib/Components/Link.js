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

var ListItem = (0, _styles.styled)("li")({
  display: "flex",
  "@media (max-width: 768px)": {
    width: "100%"
  }
});
var Anchor = (0, _styles.styled)(function (_ref) {
  var theme = _ref.theme,
      other = _objectWithoutProperties(_ref, ["theme"]);

  return /*#__PURE__*/_react["default"].createElement("a", other);
})({
  display: "block",
  color: function color(props) {
    return props.theme.text ? props.theme.text : "white";
  },
  textDecoration: "none",
  margin: "auto",
  padding: "10px",
  height: "100%",
  "@media (max-width: 768px)": {
    width: "100%"
  }
});

/**
 * Link is used for menu items without dropdowns.
 */
var Link = function Link(props) {
  var title = props.title,
      href = props.href,
      theme = props.theme;
  return /*#__PURE__*/_react["default"].createElement(ListItem, null, /*#__PURE__*/_react["default"].createElement(Anchor, {
    href: href,
    alt: title,
    theme: theme
  }, title));
};

var _default = (0, _styles.withTheme)(Link);

exports["default"] = _default;