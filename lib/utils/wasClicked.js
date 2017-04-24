"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var wasClicked = exports.wasClicked = function wasClicked(event, element) {
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