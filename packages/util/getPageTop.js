import {isDomElement} from './isDomElement'

// Determines whether or not the given element is a DOM element
export function getPageTop (el) {
  if (!isDomElement(el)) {
    return
  }

  var rect = el.getBoundingClientRect()
  var docEl = document.documentElement

  return rect.top + (window.pageYOffset || docEl.scrollTop || 0)
}
