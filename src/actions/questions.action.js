import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion } from '../utils/_DATA'
import { saveQuestionAnswer } from '../utils/api'
import { userAddQuestion, userAnswerQuestion } from './users.action'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    payload: { questions },
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: { question },
  }
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    payload: { authedUser, qid, answer },
  }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(userAddQuestion({ authedUser: author, qid: question.id }))
        dispatch(addQuestion(question))
        dispatch(hideLoading())
      }
    )
  }
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(userAnswerQuestion({ authedUser, qid, answer }))
      dispatch(answerQuestion({ authedUser, qid, answer }))
      dispatch(hideLoading())
    })
  }
}
