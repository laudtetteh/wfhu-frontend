/// <reference path='./index.d.ts'/>
// Packages
import React from 'react'
import ReactDOM from 'react-dom'

// Containers
import { App } from './App'

// CSS
import '../assets/css/index.css'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
