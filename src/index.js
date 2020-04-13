import React from 'react'
import ReactDOM from 'react-dom'

import './styles/main.scss'
import Routes from './routes'

const el = document.getElementById('app')
ReactDOM.render(
  <React.StrictMode>
    <Routes title="Hello from React!!!" />
  </React.StrictMode>,
  el,
)
