import React, { Component } from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from '@material-ui/core'

const VoteBadge = () => (
  <div className="badge-overlay">
    <span className="top-right badge">Your Vote</span>
  </div>
)

class QuestionAnswer extends Component {
  render() {
    const { question } = this.props
    const totalVoteOptionOne = question.optionOne.votes.length
    const totalVoteOptionTwo = question.optionTwo.votes.length
    const totalVotes = totalVoteOptionOne + totalVoteOptionTwo
    const optionOnePercentage =
      Math.round((totalVoteOptionOne / totalVotes) * 10000) / 100
    const optionTwoPercentage =
      Math.round((totalVoteOptionTwo / totalVotes) * 10000) / 100
    return (
      <Container className="content" component="main">
        <Grid container>
          <Grid item md={10}>
            <h1 className="content__title">{question.author} asks</h1>
            <h2>Would you rather...</h2>
          </Grid>
          <Grid item md={2}>
            <img
              src={question.avatarURL}
              alt={`${question.author} avatar`}
              width={'120px'}
            />
          </Grid>
        </Grid>

        <Box m={2} className="your-vote">
          {question.optionOne.votes.includes(question.currentUser) && (
            <VoteBadge />
          )}
          <Typography variant="h5" gutterBottom>
            {question.optionOne.text}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={optionOnePercentage}
            color="secondary"
          />
          <strong>
            {optionOnePercentage}% ― {totalVoteOptionOne} out of {totalVotes}{' '}
            votes
          </strong>
        </Box>
        <Divider middle="true" />
        <Box m={2} className="your-vote">
          {question.optionTwo.votes.includes(question.currentUser) && (
            <VoteBadge />
          )}
          <Typography variant="h5" gutterBottom>
            {question.optionTwo.text}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={optionTwoPercentage}
            color="secondary"
          />
          <strong>
            {optionTwoPercentage}% ― {totalVoteOptionTwo} out of {totalVotes}{' '}
            votes
          </strong>
        </Box>
      </Container>
    )
  }
}

export default QuestionAnswer
