import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoutes'

import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Room from '../Rooms/Room'
import Lobby from '../Rooms/Lobby'
import Profile from '../Profile/Profile'

const Main = props => {
  const { chargeUser } = props
  const { user } = props
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/login' render={
          props => (<Login chargeUser={ chargeUser } {...props} />
        )} />
        <Route exact path='/register' component={ Register }/>
        <PrivateRoute exact path='/room' component={ Room } />
        <PrivateRoute exact path='/lobby' component={ Lobby } chargeUser={ chargeUser }/>
        <PrivateRoute exact path='/profile' component={ Profile } user={ user } chargeUser={ chargeUser }/>
      </Switch>
    </div>
  )
}


export default Main