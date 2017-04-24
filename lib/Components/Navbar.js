'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  @media (max-width: 768px) {\n    overflow-y: auto;\n    position: fixed;\n    height: 100vh;\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none;\n    &::-webkit-scrollbar {\n      width: 0 !important;\n    }\n  }\n'], ['\n  @media (max-width: 768px) {\n    overflow-y: auto;\n    position: fixed;\n    height: 100vh;\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none;\n    &::-webkit-scrollbar {\n      width: 0 !important;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  background: ', ';\n  color: ', ';\n  min-height: ', ';\n\n\n  @media (max-width: 768px) {\n    position: relative;\n    flex-direction: column;\n    align-items: flex-start;\n    min-width: 200px;\n    min-height: 100%;\n    left: ', ';\n    transition: left 0.4s ease;\n    ', '\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  background: ', ';\n  color: ', ';\n  min-height: ', ';\n\n\n  @media (max-width: 768px) {\n    position: relative;\n    flex-direction: column;\n    align-items: flex-start;\n    min-width: 200px;\n    min-height: 100%;\n    left: ', ';\n    transition: left 0.4s ease;\n    ', '\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    align-items: flex-start;\n    width: 100%;\n    margin-top: 60px;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    align-items: flex-start;\n    width: 100%;\n    margin-top: 60px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  list-style-type: none;\n\n  @media (max-width: 768px) {\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: ', ';\n    width: ', ';\n    left: ', ';\n    transition: left 0.4s ease;\n    z-index: 10;\n  }\n'], ['\n  list-style-type: none;\n\n  @media (max-width: 768px) {\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: ', ';\n    width: ', ';\n    left: ', ';\n    transition: left 0.4s ease;\n    z-index: 10;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Brand = require('./Brand');

var _Brand2 = _interopRequireDefault(_Brand);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _MenuIcon = require('./MenuIcon');

var _MenuIcon2 = _interopRequireDefault(_MenuIcon);

var _wasClicked = require('../utils/wasClicked');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);
var Nav = _styledComponents2.default.nav(_templateObject2, function (props) {
    return props.theme.primary ? props.theme.primary : 'black';
}, function (props) {
    return props.theme.text ? props.theme.text : 'white';
}, function (props) {
    return props.theme.height ? props.theme.height + 'px' : '50px';
}, function (props) {
    return props.open ? '0%' : '-100%';
}, '' /* padding-top: 30px; */);
var Items = _styledComponents2.default.ul(_templateObject3);
var Header = _styledComponents2.default.li(_templateObject4, function (props) {
    return props.theme.primary ? props.theme.primary : 'black';
}, function (props) {
    return props.maxWidth ? props.maxWidth + 'px' : '200px';
}, function (props) {
    return props.open ? '0%' : '-200px';
});

var Navbar = function (_Component) {
    _inherits(Navbar, _Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

        _this.displayName = 'Navbar';

        _this.handleDocumentClick = function (e) {
            var open = _this.state.open;

            if (!(0, _wasClicked.wasClicked)(e, _this.nav) && open) {
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
        };

        _this.open = function () {
            _this.setState({
                open: true
            });
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
            var activeIndex = _this.state.activeIndex;
            var items = _this.props.items;

            items = items.map(function (item, i) {
                if (item.element) {
                    return _react2.default.cloneElement(item.element, _extends({}, item.element.props, { key: i }));
                } else if (item.dropdown) {
                    return _react2.default.createElement(_Dropdown2.default, {
                        key: i,
                        index: i,
                        open: activeIndex === i ? true : false,
                        items: item.items,
                        title: item.title,
                        changeDropdown: _this.changeDropdown
                    });
                } else {
                    return _react2.default.createElement(_Link2.default, { key: i, href: item.href, title: item.title });
                }
            });
            return _react2.default.createElement(
                Items,
                null,
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.handleDocumentClick);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                theme = _props.theme,
                brand = _props.brand,
                items = _props.items;
            var open = this.state.open;

            return _react2.default.createElement(
                _styledComponents.ThemeProvider,
                { theme: theme ? theme : {} },
                _react2.default.createElement(
                    Container,
                    null,
                    _react2.default.createElement(
                        Nav,
                        { open: open, innerRef: function innerRef(el) {
                                return _this2.nav = el;
                            } },
                        _react2.default.createElement(
                            Header,
                            { open: open },
                            brand && this.renderBrand(),
                            _react2.default.createElement(_MenuIcon2.default, { ref: function ref(el) {
                                    return _this2.icon = el;
                                }, onClick: this.toggle, open: open })
                        ),
                        items && this.renderItems()
                    )
                )
            );
        }
    }]);

    return Navbar;
}(_react.Component);

Navbar.displayName = 'Navbar';
exports.default = Navbar;