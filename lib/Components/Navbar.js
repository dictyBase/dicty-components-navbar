"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _Brand = _interopRequireDefault(require("./Brand"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _Link = _interopRequireDefault(require("./Link"));

var _MenuIcon = _interopRequireDefault(require("./MenuIcon"));

var _dom = require("../utils/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Container = (0, _styles.styled)((0, _react.forwardRef)(function (_ref, ref) {
  var other = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, other, {
    ref: ref
  }));
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

  return /*#__PURE__*/_react["default"].createElement("nav", _extends({}, other, {
    ref: ref
  }));
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
var Navbar = /*#__PURE__*/function (_Component) {
  _inherits(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _super.call(this);
    _this.nav = void 0;
    _this.icon = void 0;
    _this.container = void 0;

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
      return /*#__PURE__*/_react["default"].createElement(_Brand["default"], {
        title: title,
        href: href
      });
    };

    _this.renderItems = function () {
      var _this$state = _this.state,
          activeIndex = _this$state.activeIndex,
          open = _this$state.open;
      var items = _this.props.items;
      items = items.map(function (item, i) {
        if (item.element) {
          return _react["default"].cloneElement(item.element, _objectSpread(_objectSpread({}, item.element.props), {}, {
            key: i
          }));
        } else if (item.dropdown) {
          return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
            key: i,
            index: i,
            open: activeIndex === i ? true : false,
            items: item.items,
            title: item.title,
            changeDropdown: _this.changeDropdown,
            controlled: true
          });
        } else {
          return /*#__PURE__*/_react["default"].createElement(_Link["default"], {
            key: i,
            href: item.href,
            title: item.title
          });
        }
      });
      return /*#__PURE__*/_react["default"].createElement(Items, {
        open: open
      }, items);
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
      document.addEventListener("click", this.handleDocumentClick); // Necessary to allow container to expand to accomodate open dropdowns

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

      var _this$props = this.props,
          theme = _this$props.theme,
          brand = _this$props.brand,
          items = _this$props.items;
      var open = this.state.open;
      return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
        theme: theme ? theme : {}
      }, /*#__PURE__*/_react["default"].createElement(Container, {
        open: open,
        items: items,
        brand: brand,
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, /*#__PURE__*/_react["default"].createElement(Nav, {
        open: open,
        theme: theme,
        ref: function ref(el) {
          return _this2.nav = el;
        }
      }, /*#__PURE__*/_react["default"].createElement(Header, {
        open: open
      }, /*#__PURE__*/_react["default"].createElement(_MenuIcon["default"], {
        onClick: this.toggle,
        open: open,
        ref: function ref(el) {
          return _this2.icon = el;
        }
      }), brand && this.renderBrand()), items && this.renderItems())));
    }
  }]);

  return Navbar;
}(_react.Component);

exports["default"] = Navbar;