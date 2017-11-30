import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { setLocalStorage, getLocalStorage } from '../../services/StorageServices'
import LoginForm from './LoginForm'
import { logInCall } from '../../services/AuthServices'

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

  componentDidMount() {
    this.handleCheckLogin()
  }

  handleSubmit(e) {
    e.preventDefault()
    logInCall(this.state)
    .then(data => {
      if (data) {
        setLocalStorage(data.data.token)
        this.setState({ login: true })
      }
    })
  }

  handleCheckLogin(e) {
    const token = getLocalStorage()
    if(token) {
      this.setState({login: true})
    }
  }

  handleChargeUser() {
    console.log(this.props)
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