import React, { Component } from 'react'

import '../styles/main.css'

import Navbar from './Navbar/Navbar'
import Main from './Routing/Main'

import { getLocalStorage } from '../services/StorageServices'
import { getInfoUser } from '../services/UserServices'

// Default info
import avatar from '../config/default'


class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      user: { }
    }
    this.handleChargeUser = this.handleChargeUser.bind(this)
  }

  componentDidMount() {
    getLocalStorage() ? this.handleChargeUser() : this.handleInitUser()
  }

  handleInitUser() {
    this.setState({ user: {
      avatar: avatar
      }
    })
  }

  handleChargeUser() {
    const token = getLocalStorage()
    if (token) {
      getInfoUser().then( data => {
        this.setState({ user : data })
      })
    } else {
      this.handleInitUser()
    }
      
  }

  render() {
    let { avatar } = this.state.user
    let { user } = this.state
    const handleChargeUser = this.handleChargeUser
    return (
      <div>
        <Navbar user={ avatar } chargeUser={ handleChargeUser } />
        <Main user={ user } chargeUser={ handleChargeUser } />
      </div>
    )
  }
}

export default App
