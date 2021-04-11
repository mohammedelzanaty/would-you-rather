import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions.action'
import { receiveUsers } from './users.action'
import { setAuthedUser } from './authed-user.action'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      console.log(questions)
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
