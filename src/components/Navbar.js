import React from 'react'

import './Navbar.css'


const Navbar = () => {
  return(
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img className="logoImg" src='logo.png' alt="Logo"/>
            </div>
            <div className="col-8">
              <p className="TitleNavbar">Kuizu</p>
            </div>
            <div className="col-2 ">
              <img className="GuestImg pull-right" src='guest.png' alt="GuestImg"/>
            </div>
          </div>
        </div>
      </div>
  )
}


export default Navbar