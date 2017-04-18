export const wasClicked = (event, element) => {
    var rect = element.getBoundingClientRect()
    var minX = rect.left + element.clientLeft
    var x = event.clientX
    if (x < minX || x >= minX + element.clientWidth) {
        return false
    }
    var minY = rect.top + element.clientTop
    var y = event.clientY
    if (y < minY || y >= minY + element.clientHeight) {
        return false
    }
    return true
}
