var map = function() {
  const keys = Object.keys(this)
  const effectiveKeys = keys.filter(key => /^[0-9]|([1-9][0-9]*)$/.test(key))
  return Array.from({
      length: Math.max(...effectiveKeys) + 1
  }, (d, i) => {
      if (this.hasOwnProperty(i.toString())) return this[i]
      else return undefined
  })
}

Object.prototype.map = map