import React, { Component } from 'react'

import showLogin from './handlers/showLogin'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
    this.state.login ? this.setState({ login : false }) : this.setState({ login : true })
  }

  handleSubmit(e) {
    e.preventDefault()
    
  }

  render() {
    return(
      <div className="Login">
        <h1>Welcome to Login <span role="img" aria-label="Chicken">🐓</span></h1>
        { showLogin(this.state.login, this.handleClick) }
      </div>
    )
  }
}

export default Login