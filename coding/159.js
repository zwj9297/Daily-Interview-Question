Promise.retry = function(fn, time) {
  if (time <= 0) return new Promise(fn)
  return new Promise(fn).catch(() => {
    return Promise.retry(fn, time - 1)
  })
}