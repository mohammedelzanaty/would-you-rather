import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion } from '../utils/_DATA'

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

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
