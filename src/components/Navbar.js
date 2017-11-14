import React from 'react'

import './Navbar.css'


const Navbar = () => {
  return(
    <nav className="navbar navbar-inverse bg-primary">
     <a className="navbar-brand TitleNavbar" href="#">Kuizu</a>
        <img className="img-fluid GuestImg" src='guest.jpeg' alt="GuestImg"/>
    </nav>
  )
}


export default Navbar