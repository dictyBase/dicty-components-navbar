'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.darkenOrLighten = undefined;

var _polished = require('polished');

var darkenOrLighten = exports.darkenOrLighten = function darkenOrLighten(color) {
    var hsl = (0, _polished.parseToHsl)(color);
    if (hsl.lightness > 0.5) {
        hsl.lightness -= 0.1;
        return (0, _polished.toColorString)(hsl);
    } else if (hsl.lightness < 0.5) {
        hsl.lightness += 0.1;
        return (0, _polished.toColorString)(hsl);
    } else {
        hsl.lightness -= 0.1;
        return (0, _polished.toColorString)(hsl);
    }
};