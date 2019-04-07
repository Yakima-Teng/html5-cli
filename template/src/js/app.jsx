// write your code here
import React from 'react'
import { hydrate, render } from 'react-dom'

import '../css/app.scss'

const rootElement = document.getElementById('add')

const Demo = (props) => (
    <div className="site-container">
        <article className="site-content">
            <div className="img-demo" />
        </article>
        <aside className="site-facilities" />
    </div>
)

if (rootElement.hasChildNodes()) {
    hydrate(<Demo />, rootElement)
} else {
    render(<Demo />, rootElement)
}
