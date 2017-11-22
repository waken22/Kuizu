import React from 'react'

const showLogin = (login, handleClick) => {

  const renderLogin = () => {
    if (login) {
      return (
        <form className="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p className="message">Not registered? <a href="" onClick={ handleClick }>Create an account</a></p>
        </form>
      )
    }
    else {
      return (
        <form className="register-form">
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="email address"/>
          <button>create</button>
          <p className="message">Already registered? <a href="" onClick={ handleClick }>Sign In</a></p>
        </form>
      )
    }
  }

  return(
    <div className="login-page">
      <div className="form">
      {
        renderLogin()
      } 
      </div>
    </div>
  )
}

export default showLogin
