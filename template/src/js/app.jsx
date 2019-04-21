// write your code here
import React from 'react'
import { render } from 'react-dom'

import '../css/app.scss'

class App extends React.Component {
    onClick = () => {
        window.alert('clicked')
    }

    render () {
        return (
            <div
                onClick={this.onClick}
                className="img-demo"
            />
        )
    }
}

render(<App />, document.getElementById('app'))
