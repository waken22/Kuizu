import React from 'react'
import { Route, Redirect } from 'react-router'
import { getLocalStorage } from '../services/StorageServices'

const PrivateRoute = ({ component: Component, chargeUser: chargeUser, ...rest }) => (
  <Route {...rest} render={props => (
    getLocalStorage() ? (
      <Component chargeUser={ chargeUser } {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)


export default PrivateRoute