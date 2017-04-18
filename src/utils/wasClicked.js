export const wasClicked = (event, element) => {
    console.log(element)
    var rect = element.getBoundingClientRect()
    var minX = rect.left + element.clientLeft
    var x = event.clientX
    if (x < minX || x >= minX + element.clientWidth) {
      console.log('not clicked')
        return false
    }
    var minY = rect.top + element.clientTop
    var y = event.clientY
    if (y < minY || y >= minY + element.clientHeight) {
        console.log('not clicked')
        return false
    }
    return true
}
