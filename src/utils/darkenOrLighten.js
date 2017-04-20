// @flow
import { parseToHsl, toColorString } from 'polished'

export const darkenOrLighten = (color: String) => {
    const hsl = parseToHsl(color)
    if (hsl.lightness > 0.5) {
        hsl.lightness -= 0.1
        return toColorString(hsl)
    } else if (hsl.lightness < 0.5) {
        hsl.lightness += 0.1
        return toColorString(hsl)
    } else {
        hsl.lightness -= 0.1
        return toColorString(hsl)
    }
}
