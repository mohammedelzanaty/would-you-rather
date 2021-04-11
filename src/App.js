import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
// import { Switch, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared.action'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          {/*{this.props.loading === true ? null : (*/}
          {/*  <Switch>*/}
          {/*    */}
          {/*  </Switch>*/}
          {/*)}*/}
          hello Would you rather
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
