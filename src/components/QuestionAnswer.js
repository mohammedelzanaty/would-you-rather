import React, { Component } from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from '@material-ui/core'

class QuestionAsk extends Component {
  render() {
    return (
      <Container className="content" component="main">
        <Grid container>
          <Grid item md={10}>
            <h1 className="content__title">Tyler McGinnis asks</h1>
            <h2>Would you rather...</h2>
          </Grid>
          <Grid item md={2}>
            <img
              src={`https://randomuser.me/api/portraits/men/32.jpg`}
              alt={`question avatar`}
            />
          </Grid>
        </Grid>

        <Box m={2} className="your-vote">
          <div className="badge-overlay">
            <span className="top-right badge">Your Vote</span>
          </div>
          <Typography variant="h5" gutterBottom>
            Write JavaScript
          </Typography>
          <LinearProgress
            variant="determinate"
            value={66.67}
            color="secondary"
          />
          <strong>66.67% ― 2 out of 3 votes</strong>
        </Box>
        <Divider middle="true" />
        <Box m={2}>
          <Typography variant="h5" gutterBottom>
            Write Swift
          </Typography>
          <LinearProgress
            variant="determinate"
            value={33.33}
            color="secondary"
          />
          <strong>33.33% ― 1 out of 3 votes</strong>
        </Box>
      </Container>
    )
  }
}

export default QuestionAsk
