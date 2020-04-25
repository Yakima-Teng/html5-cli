import { Modal } from 'antd-mobile'

// 将一位数转换为两位数
export const toDouble = function (val) {
    return (val * 1) < 10 ? ('0' + val) : ('' + val)
}

export const promiseConfirm = ({ title, text, leftText, rightText }) => new Promise((resolve, reject) => {
    Modal.alert(title || '提示', text || '', [
        { text: leftText || '取消', onPress: () => resolve(false) },
        { text: rightText || '确定', onPress: () => resolve(true) },
    ])
})

export const promiseAlert = ({ title, text, caption }) => new Promise((resolve, reject) => {
    Modal.alert(title || '提示', text || '', [
        { text: caption || '我知道了', onPress: () => resolve(true) },
    ])
})

const getParamFromUrlPart = (partName, keyName) => {
    const regExp = new RegExp('^.*' + keyName + '=([^&?]*)[^&?]?.*$')
    const arrMatch = location[partName].match(regExp)
    if (arrMatch !== null && arrMatch.length > 1) {
        const returnVal = arrMatch[1]
        if (returnVal === 'null' || returnVal === 'undefined') {
            return ''
        }
        return returnVal || ''
    }
    return ''
}
/**
 * 从url链接中hash部分（即链接中#后面的部分）获取参数的值
 *
 * 注意：#后面的部分若存在问号，问号及其后面的部分，也是算hash部分的
 * @param name
 */
export const getParamFromUrlHash = (name) => getParamFromUrlPart('hash', name)

/**
 * 从url链接的search部分（即链接中?后面的部分）获取参数的值
 *
 * 注意：#后面的部分若存在问号，问号及其后面的部分，也是算hash部分的，不属于search部分
 * @param name
 * @return {string}
 */
export const getParamFromUrlQuery = (name) => getParamFromUrlPart('search', name)

// 获取字符串形式的值
export const getString = function (val) {
    return val === 0 ? '0' : (val ? ('' + val) : '')
}

export const isAndroid = () => !!navigator.userAgent.toLowerCase().match(/android/i)

export const isIOS = () => !!navigator.userAgent.toLowerCase().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)

export const loadScript = (srcUrl = '') => new Promise((resolve, reject) => {
    const fileName = srcUrl.split(/[\\/]/).reverse()[0]
    const id = `script-${fileName}`
    if (document.getElementById(id)) {
        resolve()
        return
    }

    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.id = id
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    script.timeout = 120000
    script.src = srcUrl
    script.onload = resolve
    script.onerror = reject
    head.appendChild(script)
})

export const loadStylesheet = (href = '') => new Promise((resolve, reject) => {
    const fileName = href.split(/[\\/]/).reverse()[0]
    const id = `stylesheet-${fileName}`
    if (document.getElementById(id)) {
        resolve()
        return
    }

    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href = href
    link.onload = resolve
    link.onerror = reject
    head.appendChild(link)
})

// 将类数组对象转换为数组
export const toArray = function (things) {
    return [].slice.call(things)
}

// 获取变量类型, return 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
export const getType = function (val) {
    return ({}).toString.call(val).slice(8, -1).toLowerCase()
}

// 合并对象属性（在原始对象上进行修改，不合并值为undefined的键）
const singleMerge = function (obj, options) {
    if (obj && options) {
        for (const p in options) {
            if (options.hasOwnProperty(p)) {
                if (getType(obj[p]) === 'object' && getType(options[p]) === 'object') {
                    merge(obj[p], options[p])
                } else if (options[p] !== void 0) {
                    obj[p] = options[p]
                }
            }
        }
    }
    return obj
}

// 合并对象属性（在原始对象上进行修改，不合并值为undefined的键，支持传入多个对象，统一合并到第一个对象上）
export const merge = function () {
    const args = toArray(arguments)
    const target = args.shift()
    for (let i = 0, len = args.length; i < len; i++) {
        singleMerge(target, args[i])
    }
    return target
}

// 将日期对象修改为'yyyy-mm-dd'格式
export const transferDateToShortString = (date) => {
    const yyyy = date.getFullYear()
    const mm = toDouble(date.getMonth() + 1)
    const dd = toDouble(date.getDate())
    return `${yyyy}-${mm}-${dd}`
}
