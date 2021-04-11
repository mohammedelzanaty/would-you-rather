import React, { Component } from 'react'
import { QuestionAnswer, QuestionAsk } from '../components'

class QuestionDetails extends Component {
  render() {
    const answer = true
    return answer ? <QuestionAnswer /> : <QuestionAsk />
  }
}

export default QuestionDetails
