/**
 * 本库用于避免滑动浮层时底部页面内容跟着浮动的现象
 * 代码参考自：https://github.com/tuateam/tua-body-scroll-lock
 * 使用方法为在组件渲染后调用`lockPageForScroll`方法，并在组件移除时调用`unlockPageForScroll`
 * 这两个方法入参需传入一个dom元素，e.g. lockPageForScroll(document.querySelector('.classname'))、unlockPageForScroll(document.querySelector('.classname'))
 */
const querySelector = (selector) => document.querySelector(selector)

const detectOS = (ua) => {
    ua = ua || navigator.userAgent
    const ipad = /(iPad).*OS\s([\d_]+)/.test(ua)
    const iphone = !ipad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
    const android = /(Android);?[\s/]+([\d.]+)?/.test(ua)
    const ios = iphone || ipad
    return { ios, android }
}

const getEventListenerOptions = (options) => {
    if (!options) {
        throw new Error('options must be provided')
    }

    let isSupportOptions = false
    const listenerOptions = {
        get passive () {
            isSupportOptions = true
        },
    }

    const noop = () => {}
    const testEvent = '__TUA_BSL_TEST_PASSIVE__'
    window.addEventListener(testEvent, noop, listenerOptions)
    window.removeEventListener(testEvent, noop, listenerOptions)

    const { capture } = options

    return isSupportOptions
        ? options
        : typeof capture !== 'undefined'
            ? capture
            : false
}

let lockedNum = 0
let initialClientY = 0
let initialClientX = 0
let unLockCallback = null
let documentListenerAdded = false

const lockedElements = []
const eventListenerOptions = getEventListenerOptions({ passive: false })

const setOverflowHiddenPc = () => {
    const $body = querySelector('body')
    const bodyStyle = { ...$body.style }
    const scrollBarWidth = window.innerWidth - document.body.clientWidth

    $body.style.overflow = 'hidden'
    $body.style.boxSizing = 'border-box'
    $body.style.paddingRight = `${scrollBarWidth}px`

    return () => {
        ['overflow', 'boxSizing', 'paddingRight'].forEach((x) => {
            $body.style[x] = bodyStyle[x] || ''
        })
    }
}

const setOverflowHiddenMobile = () => {
    const $html = querySelector('html')
    const $body = querySelector('body')
    const scrollTop = $html.scrollTop || $body.scrollTop
    const htmlStyle = { ...$html.style }
    const bodyStyle = { ...$body.style }

    $html.style.height = '100%'
    $html.style.overflow = 'hidden'

    $body.style.top = `-${scrollTop}px`
    $body.style.width = '100%'
    // $body.style.height = 'auto' // has compatibility problem in android 4.4
    $body.style.position = 'fixed'
    // $body.style.overflow = 'hidden'

    return () => {
        $html.style.height = htmlStyle.height || ''
        $html.style.overflow = htmlStyle.overflow || ''

        ;['top', 'width', 'height', 'overflow', 'position'].forEach((x) => {
            $body.style[x] = bodyStyle[x] || ''
        })

        window.scrollTo(0, scrollTop)
    }
}

const preventDefault = (event) => {
    if (!event.cancelable) return

    event.preventDefault()
}

const handleScroll = (event, targetElement) => {
    if (targetElement) {
        const {
            scrollTop,
            scrollLeft,
            scrollWidth,
            scrollHeight,
            clientWidth,
            clientHeight,
        } = targetElement
        const clientX = event.targetTouches[0].clientX - initialClientX
        const clientY = event.targetTouches[0].clientY - initialClientY
        const isVertical = Math.abs(clientY) > Math.abs(clientX)

        const isOnTop = clientY > 0 && scrollTop === 0
        const isOnLeft = clientX > 0 && scrollLeft === 0
        const isOnRight = clientX < 0 && scrollLeft + clientWidth + 1 >= scrollWidth
        const isOnBottom = clientY < 0 && scrollTop + clientHeight + 1 >= scrollHeight

        if (
            (isVertical && (isOnTop || isOnBottom)) ||
            (!isVertical && (isOnLeft || isOnRight))
        ) {
            return preventDefault(event)
        }
    }

    event.stopPropagation()
    return true
}

const checkTargetElement = (targetElement) => {
    if (targetElement) return
    if (targetElement === null) return
    if (process.env.NODE_ENV === 'production') return

    console.warn( // eslint-disable-line no-console
        `If scrolling is also required in the floating layer, ` +
        `the target element must be provided.`
    )
}

const lockPageForScroll = (targetElement) => {
    checkTargetElement(targetElement)

    if (detectOS().ios) {
        // iOS
        if (targetElement && lockedElements.indexOf(targetElement) === -1) {
            targetElement.ontouchstart = (event) => {
                initialClientY = event.targetTouches[0].clientY
                initialClientX = event.targetTouches[0].clientX
            }

            targetElement.ontouchmove = (event) => {
                if (event.targetTouches.length !== 1) return

                handleScroll(event, targetElement)
            }

            lockedElements.push(targetElement)
        }

        if (!documentListenerAdded) {
            document.addEventListener('touchmove', preventDefault, eventListenerOptions)
            documentListenerAdded = true
        }
    } else if (lockedNum <= 0) {
        unLockCallback = detectOS().android
            ? setOverflowHiddenMobile()
            : setOverflowHiddenPc()
    }

    lockedNum += 1
}

const unlockPageForScroll = (targetElement) => {
    checkTargetElement(targetElement)
    lockedNum -= 1

    if (lockedNum > 0) return
    if (
        !detectOS().ios &&
        typeof unLockCallback === 'function'
    ) {
        unLockCallback()
        return
    }

    // iOS
    if (targetElement) {
        const index = lockedElements.indexOf(targetElement)

        if (index !== -1) {
            targetElement.ontouchmove = null
            targetElement.ontouchstart = null
            lockedElements.splice(index, 1)
        }
    }

    if (documentListenerAdded) {
        document.removeEventListener('touchmove', preventDefault, eventListenerOptions)
        documentListenerAdded = false
    }
}

export { lockPageForScroll, unlockPageForScroll }
