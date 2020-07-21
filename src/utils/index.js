export function pad2Num(num, len = 2) {
  return num.toString().padStart(len, '0')
}

export function isOutLink(url) {
  if (!url) {
    return false
  }
  return /^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/.test(url)
}
