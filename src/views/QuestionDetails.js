import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { QuestionAnswer, QuestionAsk } from '../components'

class QuestionDetails extends Component {
  render() {
    const { questions, authedUser, users, match, history } = this.props
    const questionId = match.params.id
    const question = questions[questionId]
    // handle if question not exist
    if (!question) history.push('/404')
    question.avatarURL = users[question.author].avatarURL
    question.currentUser = authedUser
    // check if question is answered or not
    const hasAnswered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    return hasAnswered ? (
      <QuestionAnswer question={question} />
    ) : (
      <QuestionAsk question={question} />
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions,
  users,
})

export default connect(mapStateToProps)(withRouter(QuestionDetails))
