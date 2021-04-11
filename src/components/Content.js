import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  Dashboard,
  Leaderboard,
  NewQuestion,
  PageNotFound,
  QuestionDetails,
} from '../views'

const Content = () => {
  return (
    <Switch>
      <Route path="/" exact name="Dashboard" component={Dashboard} />
      <Route path="/new" name="New Question" component={NewQuestion} />
      <Route path="/question/:id" component={QuestionDetails} />
      <Route path="/leader-board" component={Leaderboard} />
      <Route path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  )
}

export default React.memo(Content)
