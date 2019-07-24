"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcTextWidth = exports.wasClicked = exports.transitionToAuto = exports.transitionFromAuto = void 0;

var transitionFromAuto = function transitionFromAuto(el, endHeight) {
  el.style.height = getComputedStyle(el).height; // Force repaint
  //eslint-disable-next-line no-unused-expressions

  el.offsetHeight;
  el.style.height = endHeight + 'px'; // el.style.overflow = 'hidden'
};

exports.transitionFromAuto = transitionFromAuto;

var transitionToAuto = function transitionToAuto(el) {
  var prevHeight = el.style.height;
  el.style.height = 'auto';
  var endHeight = getComputedStyle(el).height;
  el.style.height = prevHeight; // Force repaint
  //eslint-disable-next-line no-unused-expressions

  el.offsetHeight;
  el.style.height = endHeight;
};

exports.transitionToAuto = transitionToAuto;

var wasClicked = function wasClicked(event, element) {
  var rect = element.getBoundingClientRect();
  var minX = rect.left + element.clientLeft;
  var x = event.clientX;
  var minY = rect.top + element.clientTop;
  var y = event.clientY;

  if (x < minX || x >= minX + element.clientWidth) {
    return false;
  }

  if (y < minY || y >= minY + element.clientHeight) {
    return false;
  }

  return true;
};

exports.wasClicked = wasClicked;

var calcTextWidth = function calcTextWidth(text) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';
  var family = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sans-serif';
  var c = document.createElement('canvas');
  var ctx = c.getContext("2d");
  ctx.font = "".concat(size, " ").concat(family);
  return ctx.measureText(text).width;
};

exports.calcTextWidth = calcTextWidth;