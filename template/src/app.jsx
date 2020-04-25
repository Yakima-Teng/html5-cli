// write your code here
import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import AppRouter from './routes'
import './styles/app.scss'

render(<AppRouter />, document.getElementById('app'))
