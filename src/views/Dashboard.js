import React, { Component } from 'react'
import { Container, Tab, Tabs } from '@material-ui/core'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import { Question, TabPanel } from '../components'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `tab-panel-${index}`,
  }
}

class Dashboard extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  formatQuestions = (questionsIds) =>
    questionsIds
      .map((questionId) => ({
        author: this.props.questions[questionId].author,
        id: questionId,
        optionOne: this.props.questions[questionId].optionOne,
        optionTwo: this.props.questions[questionId].optionTwo,
        timestamp: this.props.questions[questionId].timestamp,
        avatarURL: this.props.users[this.props.authedUser].avatarURL,
      }))
      .sort(sortBy('-timestamp'))

  render() {
    const { value } = this.state
    const { questions, authedUser } = this.props
    const answeredQuestions = Object.keys(questions).filter(
      (questionId) =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)
    )

    const unAnsweredQuestions = Object.keys(questions).filter(
      (questionId) =>
        !questions[questionId].optionOne.votes.includes(authedUser) ||
        !questions[questionId].optionTwo.votes.includes(authedUser)
    )

    console.log({ unAnsweredQuestions, answeredQuestions })
    return (
      <Container className="content">
        <h1 className="content__title">Dashboard</h1>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab
            label={`Unanswered Questions ${unAnsweredQuestions.length}`}
            {...a11yProps(0)}
          />
          <Tab
            label={`Answered Questions ${answeredQuestions.length}`}
            {...a11yProps(1)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {unAnsweredQuestions &&
            this.formatQuestions(unAnsweredQuestions).map((question) => (
              <Question {...question} key={question.id} />
            ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {answeredQuestions &&
            this.formatQuestions(answeredQuestions).map((question) => (
              <Question {...question} key={question.id} />
            ))}
        </TabPanel>
      </Container>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => ({
  questions,
  users,
  authedUser,
})

export default connect(mapStateToProps)(Dashboard)
