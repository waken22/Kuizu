import React, { Component } from 'react'

import './App.css'

import Navbar from './Navbar'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}

export default App
