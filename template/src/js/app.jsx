// write your code here
import React from 'react'
import { render } from 'react-dom'
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile'

import '../css/app.scss'

function closest (el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el
        }
        el = el.parentElement
    }
    return null
}

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            modal1: false,
            modal2: false,
        }
    }
    showModal = key => (e) => {
        e.preventDefault() // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        })
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        })
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return
        }
        const pNode = closest(e.target, '.am-modal-content')
        if (!pNode) {
            e.preventDefault()
        }
    }

    render () {
        return (
            <WingBlank>
                <Button onClick={this.showModal('modal1')}>basic</Button>
                <WhiteSpace />
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="Title"
                    footer={
                        [
                            {
                                text: 'Ok',
                                onPress: () => {
                                    this.onClose('modal1')()
                                },
                            },
                        ]
                    }
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    afterClose={() => { alert('afterClose') }}
                >
                    <div style={{ height: '100px', overflow: 'scroll' }}>
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                        <div className="img-demo" />
                        scoll content...<br />
                        scoll content...<br />
                        scoll content...<br />
                    </div>
                </Modal>

                <Button onClick={this.showModal('modal2')}>popup</Button>
                <WhiteSpace />
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    afterClose={() => { alert('afterClose') }}
                >
                    <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                        {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                            <List.Item key={index}>{i}</List.Item>
                        ))}
                        <List.Item>
                            <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
                        </List.Item>
                    </List>
                </Modal>
            </WingBlank>
        )
    }
}

render(<App />, document.getElementById('app'))
