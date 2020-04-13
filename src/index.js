import React from 'react'
import ReactDOM from 'react-dom'

import './styles/main.css'
import Routes from './routes'

const el = document.getElementById('app')
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  el,
)
