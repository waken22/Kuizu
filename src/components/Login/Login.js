import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import { logInCall } from '../../services/axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      login: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUserChanges = this.handleUserChanges.bind(this)
    this.handlePassChanges = this.handlePassChanges.bind(this)
    this.handleEmailChanges = this.handleEmailChanges.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    logInCall(this.state)
    .then(data => this.setState({ login: data }))
  }

  handleUserChanges(e) {
    this.setState({ username: e.target.value })
  }
  handlePassChanges(e) {
    this.setState({ password: e.target.value })
  }
  handleEmailChanges(e) {
    this.setState({ email: e.target.value })
  }

  render() {
    const state = this.state
    const handle = {
      handleSubmit: this.handleSubmit,
      handleUserChanges: this.handleUserChanges,
      handlePassChanges: this.handlePassChanges,
      handleEmailChanges: this.handleEmailChanges
    }
    return(
      <div className="Login animated fadeInDown">
        <LoginForm state={ state } handle={ handle }/>
        {state.login ? <Redirect to='/lobby'/> : null}
      </div>
    )
  }
}

export default Login