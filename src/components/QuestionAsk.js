import React, { Component } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  withStyles,
} from '@material-ui/core'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions.action'

const styles = () => ({
  input: {
    width: '100%',
    marginBottom: '1rem',
  },
})

class QuestionAsk extends Component {
  state = {
    value: '',
  }

  handleRadioChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { value: answer } = this.state
    const {
      question: { id: qid },
      authedUser,
      dispatch,
    } = this.props
    if (!this.state.value) {
      toast.info('Please Select a Value First')
    }
    dispatch(handleAnswerQuestion({ authedUser, qid, answer }))
  }

  render() {
    const { classes, question } = this.props
    const { value } = this.state
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
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={this.handleRadioChange}
          >
            <FormControlLabel
              value="optionOne"
              control={<Radio />}
              label={question.optionOne.text}
            />
            <FormControlLabel
              value="optionTwo"
              control={<Radio />}
              label={question.optionTwo.text}
            />
          </RadioGroup>
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            onClick={this.handleSubmit}
          >
            Submit Question Answer
          </Button>
        </FormControl>
      </Container>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default withStyles(styles)(connect(mapStateToProps)(QuestionAsk))
