import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Topbar from './Topbar/Topbar'

ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
