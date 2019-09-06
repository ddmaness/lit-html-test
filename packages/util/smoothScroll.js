import {isDomElement} from './isDomElement'
import {getPageTop} from './getPageTop'

// ===========================================
// easeInOutQuad()
// ease-in-out transition function - http://goo.gl/5HLl8
//
const easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// ===========================================
// scrollTo()
// Animate a browser scroll to the given element
// https://gist.github.com/james2doyle/5694700
//
// Params:
// @to: the targeted DOM element. Expected to be a native HTML node (i.e. not an umbrella object)
// @s: optional settings, including duration and targeted scroll offset
export function smoothScroll (to, s = {}) {
  // merge default settings with the settings passed in
  const defaults = {
    duration: 600,
    offset: 0,
  }

  const settings = Object.assign({}, defaults, s)

  if (!isDomElement(to)) {
    return
  }

  // consider partially-supported scrollIntoView() when browser support is better
  // behavior: smooth isn't supported by hardly anything yet, which is the critical piece (otherwise scrolling won't be animated).
  // to.scrollIntoView({ behavior: 'smooth' })

  const topTarget = getPageTop(to)
  const start = document.scrollingElement.scrollTop
  const change = topTarget - start - settings.offset
  let currentTime = 0
  const increment = 20

  // find the new distance from the top and move to it
  const animateScroll = function () {
    currentTime += increment

    if (currentTime < settings.duration) {
      requestAnimationFrame(animateScroll)
    }

    const distance = easeInOutQuad(currentTime, start, change, settings.duration)

    document.scrollingElement.scrollTop = distance
  }

  animateScroll()
}
