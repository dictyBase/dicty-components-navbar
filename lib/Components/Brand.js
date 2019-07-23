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
    container: {
      listStyleType: "none",
      display: "flex",
      padding: "10px",
      "@media (maxWidth: 768px)": {
        height: "30px"
      }
    },
    link: {
      display: "block",
      margin: "auto",
      textDecoration: "none",
      color: function color(theme) {
        return theme.text ? theme.text : "white";
      },
      fontSize: "1.5em",

      "@media (max-width: 768px)": {
        top: 0,
        zIndex: 10
      }
    }
  };
});

var Brand = function Brand(props) {
  var title = props.title,
      href = props.href;


  var theme = (0, _styles.useTheme)();
  var classes = useStyles(theme);

  return _react2.default.createElement(
    "div",
    { className: classes.container },
    _react2.default.createElement(
      "a",
      { className: classes.link, href: href },
      title
    )
  );
};

Brand.displayName = "Brand";
exports.default = Brand;