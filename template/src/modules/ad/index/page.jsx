/**
 * 纯过渡页，不需要渲染DOM节点
 */

import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { promiseConfirm } from '../../../scripts/utils'

class Page extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    async componentWillMount () {
        const boolResult = await promiseConfirm({
            title: '提示',
            text: '请选择要去往哪个页面',
            leftText: '去看健康码',
            rightText: '去看广告文案',
        })
        if (boolResult === true) {
            this.props.history.push(`/ad/show?key1=value1`) // 新增浏览历史
            return
        }
        this.props.history.replace(`/code/index`) // 替换当前浏览历史
    }

    render () {
        return null
    }
}

export default withRouter(Page)
