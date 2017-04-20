// @flow
export const wasClicked = (event: MouseEvent, element: any) => {
    const rect: Object = element.getBoundingClientRect()
    const minX: number = rect.left + element.clientLeft
    const x: number = event.clientX
    const minY: number = rect.top + element.clientTop
    const y: number = event.clientY
    if (x < minX || x >= minX + element.clientWidth) {
        return false
    }
    if (y < minY || y >= minY + element.clientHeight) {
        return false
    }
    return true
}
