import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ component: Component, exact, path, authedUser }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      authedUser ? (
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

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

export default connect(mapStateToProps)(ProtectedRoute)
