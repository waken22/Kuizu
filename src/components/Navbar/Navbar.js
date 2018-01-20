import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { removeLocalStorage, getLocalStorage } from '../../services/StorageServices'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuNav: false,
      logoutNav: false,
      profileNav: false,
      pathname: ''
    }
    this.NavToggle = this.NavToggle.bind(this)
    this.LogoutToggle = this.LogoutToggle.bind(this)
    this.ProfileToggle = this.ProfileToggle.bind(this)
  }


  ChangePathName() {
    let currentPath = window.location.pathname
    this.setState({ pathname: currentPath })
  }

  NavToggle() {
    this.state.menuNav ? this.setState({ menuNav: false }) : this.setState({ menuNav: true })
  } 

  ProfileToggle() {
    const CurrentRoute = window.location.pathname
    const token = getLocalStorage()

    // Don't redirect if profile inside the path profile
    if(token) {
      if(CurrentRoute !== '/profile') {
        this.setState({ profileNav: true})
      }
    } 
  }

  LogoutToggle() {
    const CurrentRoute = window.location.pathname
    const token = getLocalStorage()

    // Don't redirect if logout in home
    if(token) {
      if(CurrentRoute !== '/')
        this.setState({ logoutNav: true})

      removeLocalStorage()
      this.props.chargeUser()
    }
  }

  render() {
    const avatar = this.props.user
    const { menuNav, logoutNav, profileNav } = this.state

    return(
      <div>
        <nav className="navbar bg-primary navbar-kuizu">
          <a className="navbar-brand TitleNavbar" href="">Kuizu</a>
          <img onClick={ this.NavToggle } className="img-fluid guest-img" src={ avatar } alt="loading"/>
        </nav>
        { 
          menuNav ?
            <div className='menu-nav container'>
              <div onClick={ this.ProfileToggle } className='profile-nav'><span>My Profile</span></div>
              <div onClick={ this.LogoutToggle } className='profile-logout'><span>Logout <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i></span></div>
            </div>
          :
            <div></div>
        }
        {
          logoutNav ?
            (this.setState({ logoutNav: false}),
            this.setState({ menuNav: false}),
            <Redirect to='/'/>)
          :
            <div></div>
        }
        {
          profileNav ?
            (this.setState({ profileNav: false}),
            this.setState({ menuNav: false}),
            <Redirect to='/profile'/>)
          :
            <div></div>
        }
      </div>
    )
  } 
}


export default Navbar