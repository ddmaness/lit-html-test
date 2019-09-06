// ====================================================
// isDomElement: test to determine if a DOM element or not
//
/* eslint-disable no-undef */
export function isDomElement (o) {
  return (typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string')
}
