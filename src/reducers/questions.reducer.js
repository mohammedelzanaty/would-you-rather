import { ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../types'

export default function questionsReducer(questions = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...questions,
        ...action.payload.questions
      }
    case ADD_QUESTION:
      const { question } = action.payload
      return {
        ...questions,
        [question.id]: question
      }
    case ANSWER_QUESTION:
      // TODO: write logic for save new question
      return questions
    default:
      return questions
  }
}
