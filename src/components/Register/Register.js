import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import RegisterForm from './RegisterForm'
import { RegisterCall } from '../../services/AuthServices'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      register: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUserChanges = this.handleUserChanges.bind(this)
    this.handlePassChanges = this.handlePassChanges.bind(this)
    this.handleEmailChanges = this.handleEmailChanges.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    RegisterCall(this.state)
    .then(data => {
      if (data) {
        this.setState({ register: true })
      }
    })
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
      <div className="Login">
        <RegisterForm state={ state } handle={ handle }/>
        {state.register ? <Redirect to='/login'/> : null}
      </div>
    )
  }
}

export default Register