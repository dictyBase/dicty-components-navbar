"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

var _dom = require("../utils/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Menu = (0, _styles.styled)((0, _react.forwardRef)(function (_ref, ref) {
  var theme = _ref.theme,
      open = _ref.open,
      other = _objectWithoutProperties(_ref, ["theme", "open"]);

  return _react2.default.createElement("ul", _extends({}, other, { ref: ref }));
}))({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: 0,
  position: "relative",
  background: function background(props) {
    return props.open && props.theme.secondary ? props.theme.secondary : "transparent";
  },
  transition: "all 0.2s ease",

  "@media (max-width: 768px)": {
    alignItems: "initial",
    width: "100%"
  }
});
var Toggle = (0, _styles.styled)(function (_ref2) {
  var theme = _ref2.theme,
      open = _ref2.open,
      other = _objectWithoutProperties(_ref2, ["theme", "open"]);

  return _react2.default.createElement("li", other);
})({
  display: "block",
  cursor: "pointer",
  padding: "0px 20px 0px 10px",
  transition: "transform 0.3s ease, top 0.3s ease, bottom 0.3s ease",
  color: function color(props) {
    return props.theme.text ? props.theme.text : "white";
  },
  lineHeight: function lineHeight(props) {
    return props.theme.height ? props.theme.height : "50px";
  },

  "@media (max-width: 768px)": {
    lineHeight: "initial",
    position: "relative",
    margin: 0
  },

  "&::after": {
    content: "''",
    position: "absolute",
    top: function top(props) {
      return props.open ? "9px" : "0px";
    },
    bottom: 0,
    right: "5px",
    margin: "auto",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: function borderTop(props) {
      return props.theme.text ? "5px solid " + props.theme.text : "5px solid white";
    },
    transform: function transform(props) {
      return props.open ? "rotateX(180deg)" : "rotateX(0deg)";
    },
    transformOrigin: "top",
    transition: "inherit",

    "@media (max-width: 768px)": {
      top: function top(props) {
        return props.open ? "19px" : "11px";
      },
      right: "25px",
      bottom: function bottom(props) {
        return props.open ? "11px" : "10px";
      }
    }
  }
});

var List = (0, _styles.styled)((0, _react.forwardRef)(function (_ref3, ref) {
  var theme = _ref3.theme,
      open = _ref3.open,
      other = _objectWithoutProperties(_ref3, ["theme", "open"]);

  return _react2.default.createElement("ul", _extends({}, other, { ref: ref }));
}))({
  position: "absolute",
  top: "100%",
  left: 0,
  display: "flex",
  flexDirection: "column",
  padding: "0px",
  height: "0px",
  minWidth: "calc(100% - 2px)",
  width: "auto",
  overflow: "hidden",
  listStyleType: "none",
  transition: "all 0.2s ease",
  background: "white",
  borderLeft: function borderLeft(props) {
    return props.theme.secondary ? "1px solid " + props.theme.secondary : "1px solid #333";
  },
  borderRight: function borderRight(props) {
    return props.theme.secondary ? "1px solid " + props.theme.secondary : "1px solid #333";
  },
  borderBottom: function borderBottom(props) {
    return props.theme.secondary ? "1px solid " + props.theme.secondary : "1px solid #333";
  },
  borderBottomWidth: function borderBottomWidth(props) {
    return props.open ? "1px" : "0px";
  },
  borderBottomRightRadius: "3px",
  borderBottomLeftRadius: "3px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
  zIndex: 10000,
  whiteSpace: "nowrap",

  "@media (max-width: 768px)": {
    position: "relative",
    top: 0,
    border: "none",
    color: function color(props) {
      return props.theme.secondary ? props.theme.secondary : "black";
    },
    boxShadow: "none",
    background: function background(props) {
      return props.theme.primary ? props.theme.primary : "#15317e";
    }
  }
});

var Item = (0, _styles.styled)(function (_ref4) {
  var theme = _ref4.theme,
      other = _objectWithoutProperties(_ref4, ["theme"]);

  return _react2.default.createElement("li", other);
})({
  position: "relative",
  color: function color(props) {
    return props.theme.primary ? props.theme.primary : "black";
  },
  transition: "all 0.14s ease",

  "@media (max-width: 768px)": {
    color: "white"
  }
});

var Link = (0, _styles.styled)(function (_ref5) {
  var theme = _ref5.theme,
      other = _objectWithoutProperties(_ref5, ["theme"]);

  return _react2.default.createElement("a", other);
})({
  textDecoration: "none",
  textAlign: "left",
  background: "white",
  color: function color(props) {
    return props.theme.primary ? props.theme.primary : "#15317e";
  },
  padding: "10px 10px 10px 5px",
  display: "block",

  "&:hover": {
    color: "white",
    background: function background(props) {
      return props.theme.primary ? props.theme.primary : "#15317e";
    }
  },

  "@media (max-width: 768px)": {
    padding: "10px 0px 10px 40px",
    color: "white !important",
    background: function background(props) {
      return props.theme.primary ? props.theme.primary : "#15317e";
    }
  }
});

/**
 * Dropdown provides a dropdown menu with a set of specified items.
 */

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    _this.close = function () {
      (0, _dom.transitionFromAuto)(_this.list, 0);
    };

    _this.open = function () {
      (0, _dom.transitionToAuto)(_this.list);
    };

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          changeDropdown = _this$props.changeDropdown,
          index = _this$props.index;

      if (open) {
        // If dropdown is clicked while open, set Navbar's activeIndex to -1
        // to signify that all dropdowns are currently closed
        changeDropdown(-1);
      } else {
        changeDropdown(index);
      }
    };

    _this.handleDocumentClick = function (e) {
      var _this$props2 = _this.props,
          changeDropdown = _this$props2.changeDropdown,
          open = _this$props2.open;

      if (!(0, _dom.wasClicked)(e, _this.menu) && open) {
        e.stopImmediatePropagation();
        _this.close();
        changeDropdown(-1);
        return;
      }
    };

    _this.renderItems = function () {
      var _this$props3 = _this.props,
          items = _this$props3.items,
          theme = _this$props3.theme;

      items = items.map(function (item, i) {
        return _react2.default.createElement(
          Item,
          { key: i, theme: theme },
          _react2.default.createElement(
            Link,
            { href: item.href, theme: theme },
            item.name
          )
        );
      });
      return items;
    };

    _this.state = {
      width: null
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      document.addEventListener("click", this.handleDocumentClick);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        width: getComputedStyle(this.list).width
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var open = nextProps.open;

      if (open) {
        this.open();
      } else if (!open) {
        this.close();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleDocumentClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          open = _props.open,
          theme = _props.theme;
      var width = this.state.width;


      return _react2.default.createElement(
        Menu,
        {
          theme: theme,
          open: open,
          ref: function ref(el) {
            return _this2.menu = el;
          },
          width: width },
        _react2.default.createElement(
          Toggle,
          {
            theme: theme,
            onClick: this.handleClick,
            open: open,
            width: width },
          title
        ),
        _react2.default.createElement(
          List,
          { theme: theme, open: open, ref: function ref(el) {
              return _this2.list = el;
            } },
          this.renderItems()
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = (0, _styles.withTheme)(Dropdown);