import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Switch, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared.action'
import { ProtectedRoute } from './ProtectedRoute'
import { Login } from './views'
import { Layout } from './layouts'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          {this.props.loading === true ? null : (
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <ProtectedRoute path="/" name="Main" component={Layout} />
            </Switch>
          )}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
