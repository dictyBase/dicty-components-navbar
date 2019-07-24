"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/styles");

var _Brand = require("./Brand");

var _Brand2 = _interopRequireDefault(_Brand);

var _Dropdown = require("./Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

var _MenuIcon = require("./MenuIcon");

var _MenuIcon2 = _interopRequireDefault(_MenuIcon);

var _dom = require("../utils/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Container = (0, _styles.styled)((0, _react.forwardRef)(function (_ref, ref) {
  var other = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement("div", _extends({}, other, { ref: ref }));
}))({
  width: "100%",
  zIndex: "10000",

  "@media (max-width: 768px)": {
    overflow: "hidden",
    position: "initial",
    height: "50px",
    transition: "height 0.3s ease",
    "-ms-overflow-style:": "none",
    "&::-webkit-scrollbar": {
      width: "0 !important"
    }
  }
});

var Nav = (0, _styles.styled)((0, _react.forwardRef)(function (_ref2, ref) {
  var theme = _ref2.theme,
      other = _objectWithoutProperties(_ref2, ["theme"]);

  return _react2.default.createElement("nav", _extends({}, other, { ref: ref }));
}))({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  background: function background(props) {
    return props.theme.primary ? props.theme.primary : "#15317e";
  },
  color: function color(props) {
    return props.theme.text ? props.theme.text : "white";
  },
  minHeight: function minHeight(props) {
    return props.theme.height ? props.theme.height + "px" : "50px";
  },

  "@media (max-width: 768px)": {
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: "200px",
    minHeight: "100%"
  }
});
var Items = (0, _styles.styled)("ul")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyleType: "none",

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
});

var Header = (0, _styles.styled)("li")({
  listStyleType: "none",

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 10,
    width: "100%"
  }
});

/**
 * Navbar is the outer container for the navbar library.
 */

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

    _this.handleTransitionend = function (e) {
      var open = _this.state.open;

      if (open && e.propertyName === "height") {
        _this.container.style.height = "auto";
      }
    };

    _this.handleDocumentClick = function (e) {
      var open = _this.state.open;

      if (!(0, _dom.wasClicked)(e, _this.nav) && open) {
        _this.close();
      }
    };

    _this.toggle = function (e) {
      var open = _this.state.open;


      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      if (open) {
        _this.close();
      } else {
        _this.open();
      }
    };

    _this.close = function () {
      _this.setState({
        open: false,
        activeIndex: -1
      });
      (0, _dom.transitionFromAuto)(_this.container, 50);
    };

    _this.open = function () {
      _this.setState({
        open: true
      });
      (0, _dom.transitionToAuto)(_this.container);
    };

    _this.changeDropdown = function (i) {
      _this.setState({
        activeIndex: i
      });
    };

    _this.renderBrand = function () {
      var _this$props$brand = _this.props.brand,
          title = _this$props$brand.title,
          href = _this$props$brand.href;

      return _react2.default.createElement(_Brand2.default, { title: title, href: href });
    };

    _this.renderItems = function () {
      var _this$state = _this.state,
          activeIndex = _this$state.activeIndex,
          open = _this$state.open;
      var items = _this.props.items;

      items = items.map(function (item, i) {
        if (item.element) {
          return _react2.default.cloneElement(item.element, _extends({}, item.element.props, {
            key: i
          }));
        } else if (item.dropdown) {
          return _react2.default.createElement(_Dropdown2.default, {
            key: i,
            index: i,
            open: activeIndex === i ? true : false,
            items: item.items,
            title: item.title,
            changeDropdown: _this.changeDropdown,
            controlled: true
          });
        } else {
          return _react2.default.createElement(_Link2.default, { key: i, href: item.href, title: item.title });
        }
      });
      return _react2.default.createElement(
        Items,
        { open: open },
        items
      );
    };

    _this.state = {
      activeIndex: -1,
      open: false
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleDocumentClick);
      // Necessary to allow container to expand to accomodate open dropdowns
      this.container.addEventListener("transitionend", this.handleTransitionend);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleDocumentClick);
      this.container.removeEventListener("transitionend", this.handleTransitionend);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          theme = _props.theme,
          brand = _props.brand,
          items = _props.items;
      var open = this.state.open;


      return _react2.default.createElement(
        _styles.ThemeProvider,
        { theme: theme ? theme : {} },
        _react2.default.createElement(
          Container,
          {
            open: open,
            items: items,
            brand: brand,
            ref: function ref(el) {
              return _this2.container = el;
            } },
          _react2.default.createElement(
            Nav,
            { open: open, theme: theme, ref: function ref(el) {
                return _this2.nav = el;
              } },
            _react2.default.createElement(
              Header,
              { open: open },
              _react2.default.createElement(_MenuIcon2.default, {
                onClick: this.toggle,
                open: open,
                ref: function ref(el) {
                  return _this2.icon = el;
                }
              }),
              brand && this.renderBrand()
            ),
            items && this.renderItems()
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

exports.default = Navbar;