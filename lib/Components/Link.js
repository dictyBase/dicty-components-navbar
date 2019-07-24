"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListItem = (0, _styles.styled)("li")({
  display: "flex",
  "@media (max-width: 768px)": {
    width: "100%"
  }
});
var Anchor = (0, _styles.styled)(function (_ref) {
  var theme = _ref.theme,
      other = _objectWithoutProperties(_ref, ["theme"]);

  return _react2.default.createElement("a", other);
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


  return _react2.default.createElement(
    ListItem,
    null,
    _react2.default.createElement(
      Anchor,
      { href: href, alt: title, theme: theme },
      title
    )
  );
};

exports.default = (0, _styles.withTheme)(Link);