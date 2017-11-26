import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = props => {
  let { username, password, email } = props.state
  const { handleSubmit, handleUserChanges, handlePassChanges, handleEmailChanges } = props.handle
  
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" onSubmit={ handleSubmit }>
          <input value={ username } onChange={ handleUserChanges } required type="text" placeholder="name"/>
          <input value={ password } onChange={ handlePassChanges } required type="password" placeholder="password"/>
          <input value={ email } onChange={ handleEmailChanges } required type="email" placeholder="email address"/>
          <button>create</button>
          <p className="message">Already registered? <Link to='/login'>Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
