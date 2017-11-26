import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import Room from './Rooms/Room'
import Rooms from './Rooms/Lobby'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/register' component={ Register }/>
        <Route exact path='/room/' component={ Room } />
        <Route exact path='/lobby/' component={ Rooms } />
      </Switch>
    </div>
  )
}


export default Main