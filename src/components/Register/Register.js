import React, { Component } from 'react'

import RegisterForm from './RegisterForm'
import { RegisterCall } from '../../services/axios'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUserChanges = this.handleUserChanges.bind(this)
    this.handlePassChanges = this.handlePassChanges.bind(this)
    this.handleEmailChanges = this.handleEmailChanges.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.state.login ? this.setState({ login : false }) : this.setState({ login : true })
  }

  handleSubmit(e) {
    e.preventDefault()
    RegisterCall(this.state)
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
      <div className="Login animated fadeInUp">
        <RegisterForm state={ state } handle={ handle }/>
      </div>
    )
  }
}

export default Register