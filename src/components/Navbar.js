import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { removeLocalStorage, getLocalStorage } from '../services/StorageServices'



import './Navbar.css'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuNav: false,
      logoutNav: false
    }
    this.NavToggle = this.NavToggle.bind(this)
    this.LogoutToggle = this.LogoutToggle.bind(this)
  }

  NavToggle() {
    this.state.menuNav ? this.setState({ menuNav: false }) : this.setState({ menuNav: true })
  } 

  LogoutToggle() {
    const CurrentRoute = window.location.pathname
    const token = getLocalStorage()

    // Don't redirect if logout in home
    if(!CurrentRoute === '/')
      this.setState({ logoutNav: true})

    removeLocalStorage()
    this.props.chargeUser()
  }

  render() {
    const avatar = this.props.user
    const menuNav = this.state.menuNav
    const logoutNav = this.state.logoutNav
    return(
      <div>
        <nav className="navbar bg-primary navbar-kuizu">
          <a className="navbar-brand TitleNavbar" href="">Kuizu</a>
          <img onClick={ this.NavToggle } className="img-fluid GuestImg" src={ avatar } alt="loading"/>
        </nav>
        { menuNav ?
            <div className='menu-nav container'>
              <div className='profile-nav'><span>My Profile</span></div>
              <div onClick={ this.LogoutToggle } className='profile-logout'><span>Logout <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i></span></div>
            </div>
          :
            <div></div>
        }
        {
          logoutNav ?
            <Redirect to='/'/>
          :
            <div></div>
        }
      </div>
    )
  } 
}


export default Navbar