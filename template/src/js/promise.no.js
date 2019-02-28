export const delay = (interval = 300) => (promise) => {
  return new Promise((resolve, reject) => {
    promise.then((result) => {
      setTimeout(() => resolve(result), interval)
    }).catch((error) => {
      setTimeout(() => reject(error), interval)
    })
  })
}

export const timeout = (interval) => (promise) => {
  return Promise.race([
    delay(interval)(Promise.reject(new Error('Timeout, please try later'))),
    promise
  ])
}
