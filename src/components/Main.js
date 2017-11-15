import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Room from './Room'
import Rooms from './Rooms'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/room/' component={ Room } />
        <Route exact path='/rooms/' component={ Rooms } />
      </Switch>
    </div>
  )
}


export default Main