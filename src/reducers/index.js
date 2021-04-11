import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import questions from './questions.reducer'
import users from './users.reducer'
import authedUser from './authed-user.reducer'

const rootReducer = combineReducers({
  questions,
  users,
  authedUser,
  loadingBar: loadingBarReducer,
})

export default rootReducer
