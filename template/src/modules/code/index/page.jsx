import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './page.less'
import {
    loadScript,
    promiseAlert,
} from '../../../scripts/utils'

const codeNotes = {
    red: [
        '红码：',
        '不能随意通行。',
    ].join('<br />'),
    yellow: [
        '黄码：',
        '请留意自身状况。',
    ].join('<br />'),
    green: [
        '绿码：',
        '可正常通行。',
    ].join('<br />'),
}

class Page extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    elemQrCode = null

    state = {
        statusColor: 'green',
    }

    componentDidMount () {
        document.title = '健康码'
        this.generateQrCode()
    }

    generateQrCode = async () => {
        try {
            const state = this.state
            const qrCodeStr = {
                codeId: 'A am a code id',
                dueTime: new Date().getTime(),
            }
            await loadScript('./static/jquery.qrcode.min.js')
            $(this.elemQrCode).qrcode({
                render: 'canvas',
                text: JSON.stringify(qrCodeStr),
                bacground: '#ffffff',
                foreground: (() => {
                    const color = state.statusColor
                    if (color === 'red') { return '#ff0100' }
                    if (color === 'yellow') { return '#fff002' }
                    if (color === 'green') { return '#37b34c' }
                    return '#000000'
                })(),
            })
        } catch (err) {
            promiseAlert({ text: err.message })
        }
    }

    render () {
        const state = this.state
        return (
            <div className="pageCodeIndex">
                <article className="cardContent">
                    <div className="qrCodeWrapper">
                        <div
                            onClick={() => {
                                this.setState({
                                    statusColor: ['red', 'green', 'yellow'][Math.floor(Math.random() * 3)],
                                }, () => {
                                    $(this.elemQrCode).html('')
                                    this.generateQrCode()
                                })
                            }}
                            ref={(elem) => (this.elemQrCode = elem)} className="qrCode" />
                    </div>
                    <div className="note" dangerouslySetInnerHTML={{ __html: codeNotes[state.statusColor] }} />
                </article>
            </div>
        )
    }
}

export default withRouter(Page)
