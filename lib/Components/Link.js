"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    listItem: {
      display: "flex",
      "@media (max-width: 768px)": {
        width: "100%"
      }
    },
    anchor: {
      display: "block",
      color: function color(theme) {
        return theme.text ? theme.text : "white";
      },
      textDecoration: "none",
      margin: "auto",
      padding: "10px",
      height: "100%",
      "@media (max-width: 768px)": {
        width: "100%"
      }
    }
  };
});

var Link = function Link(props) {
  var title = props.title,
      href = props.href;


  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  return _react2.default.createElement(
    "li",
    { className: classes.link },
    _react2.default.createElement(
      "a",
      { href: href, alt: title, className: classes.anchor },
      title
    )
  );
};

Link.displayName = "Link";
exports.default = Link;