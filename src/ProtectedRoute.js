import React from 'react'
import { withRouter, Redirect, Route } from 'react-router-dom'

export const ProtectedRoute = ({
  component: Component,
  exact,
  path,
  isAuthenticated = true,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

export default withRouter(ProtectedRoute)
