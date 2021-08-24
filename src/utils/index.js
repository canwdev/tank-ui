export const guid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }

  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

export function pad2Num(num, len = 2) {
  return num.toString().padStart(len, '0')
}

export function isOutLink(url) {
  if (!url) {
    return true
  }
  return /^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/.test(url)
}

const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions')
}

export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {}
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}

export const isObject = function(obj) {
  return obj !== null && typeof obj === 'object'
}
