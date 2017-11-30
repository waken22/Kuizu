import React from 'react'
import { Route, Redirect } from 'react-router'
import { getLocalStorage } from '../services/StorageServices'

const PrivateRoute = ({ component: Component, chargeUser: chargeUser, user: user, ...rest }) => (
  <Route {...rest} render={props => (
    getLocalStorage() ? (
      <Component chargeUser={ chargeUser } user={ user } {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)


export default PrivateRoute