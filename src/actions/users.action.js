import {
  RECEIVE_USERS,
  USER_ADD_QUESTION,
  USER_ANSWER_QUESTION,
} from '../types'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: { users },
  }
}

export function userAddQuestion({ authedUser, qid }) {
  return { type: USER_ADD_QUESTION, payload: { authedUser, qid } }
}

export function userAnswerQuestion({ authedUser, qid, answer }) {
  return { type: USER_ANSWER_QUESTION, payload: { answer, qid, authedUser } }
}
