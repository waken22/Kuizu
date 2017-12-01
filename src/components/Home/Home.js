import React from 'react'
import { Link } from 'react-router-dom'

import '../App.scss'


import ButtonSpecial from '../Buttons/buttons'
import SliderHome from './SliderHome'

const Home = () => {
  return (
    <div className='Home'>
      <SliderHome />
      <div className='DivJoin'>
        <Link to='/login'><ButtonSpecial type='raise' text='Join Now !' /></Link>
      </div>
      <div className="container-fluid">
        <div className="Cards">
          <div className="row">
            <div className="col-md-4 card ani1">
              <i className="fa fa-users"></i>
              <div className="card-body">
                <h4 className="card-title">Flexible Community</h4>
                <p className="card-text">Everybody can make a room to talk with registered people</p>
              </div>
            </div>
            <div className="col-md-4 card ani2">
              <i className="fa fa-comments"></i>
              <div className="card-body">
                <h4 className="card-title">Feedback </h4>
                <p className="card-text">We appreciate all suggestions to improve our community</p>
              </div>
            </div>
            <div className="col-md-4 card ani3">
              <i className="fa fa-refresh"></i>
              <div className="card-body">
                <h4 className="card-title">Constant Updates</h4>
                <p className="card-text">A project with continuous updates in Github an opensource Project!</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
  export default Home