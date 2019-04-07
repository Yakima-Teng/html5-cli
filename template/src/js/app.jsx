// write your code here
import React from 'react'
import { render } from 'react-dom'

import '../css/app.scss'

const Demo = (props) => (
    <div className="site-container">
        <article className="site-content">
            <div className="img-demo" />
        </article>
        <aside className="site-facilities" />
    </div>
)

render(
    <Demo />,
    document.getElementById('app')
)
