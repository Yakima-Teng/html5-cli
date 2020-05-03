import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './page.less'
import { getParamFromUrlHash } from '../../../scripts/utils'

class Page extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    state = {
        key1: getParamFromUrlHash('key1'),
    }

    componentDidMount () {
        document.title = '广告展示'
    }

    render () {
        const props = this.props
        const state = this.state
        return (
            <div className="page-ad-show">
                <div className="paragraph">1. 页面url上传入的参数key1的值是{state.key1}。</div>
                <div className="paragraph">2. 页面组件state的值是{JSON.stringify(state, null, 2)}。</div>
                <div className="paragraph">3. 页面组件props的值是{JSON.stringify(props, null, 2)}。</div>
            </div>
        )
    }
}

export default withRouter(Page)
