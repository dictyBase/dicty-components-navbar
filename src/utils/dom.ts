// @flow
export const transitionFromAuto = (el: any, endHeight: number) => {
  el.style.height = getComputedStyle(el).height
  // Force repaint
  //eslint-disable-next-line no-unused-expressions
  el.offsetHeight
  el.style.height = endHeight + "px"
  // el.style.overflow = 'hidden'
}

export const transitionToAuto = (el: any) => {
  const prevHeight = el.style.height
  el.style.height = "auto"
  const endHeight = getComputedStyle(el).height
  el.style.height = prevHeight
  // Force repaint
  //eslint-disable-next-line no-unused-expressions
  el.offsetHeight
  el.style.height = endHeight
}

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

export const calcTextWidth = (
  text: string,
  size: any = "16px",
  family: string = "sans-serif",
) => {
  const c = document.createElement("canvas")
  let ctx = c.getContext("2d")
  ctx.font = `${size} ${family}`
  return ctx.measureText(text).width
}
