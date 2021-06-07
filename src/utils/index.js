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
    return false
  }
  return /^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/.test(url)
}
