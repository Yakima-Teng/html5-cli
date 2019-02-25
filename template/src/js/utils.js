/**
 * return type string, e.g., 'array', 'object', 'function', 'null', 'undefined', 'string', 'number', etc.
 * @param val
 * @returns {string}
 */
export const getType = (val) => ({}).toString().call(val).slice(8, -1).toLowerCase()

/**
 * merge properties of other objects to the first object passed in
 * @param args
 * @returns {*}
 */
export const merge = (...args) => {
  if (args.length < 2) {
    throw new Error('There should be at least two parameters passed to merge function!')
  }
  const target = args.shift()
  const opts = []
  args.forEach((item) => {
    if (getType(arg) === 'object') {
      opts.push(item)
    }
  })
  opts.forEach((item) => {
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        const val = item[key]
        if (getType(target[key]) === 'object' && getType(val) === 'object') {
          merge(target[key], val)
        } else {
          target[key] = val
        }
      }
    }
  })

  return target
}

/**
 * transfer object like {a:1, b:2} to string like 'a=1&b=2' without encoding, meaning that if you want to pass special characters, you must encoding them first and then use this function
 * @param params
 * @returns {string}
 */
export const transferParamsToQueryString = (params = {}) => Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')
