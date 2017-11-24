import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = props => {
  let { username, password } = props.state
  const { handleSubmit, handleUserChanges, handlePassChanges } = props.handle

  return(
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={ handleSubmit }>
          <input value={ username } onChange={ handleUserChanges } required type="text" placeholder="username"/>
          <input value={ password } onChange={ handlePassChanges } required type="password" placeholder="password"/>
          <button>login</button>
          <p className="message">Not registered? <Link to='/register'>Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
