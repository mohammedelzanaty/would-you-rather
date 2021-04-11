import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Container, TextField, withStyles } from '@material-ui/core'
import { Divider } from '../components'
import { handleAddQuestion } from '../actions/questions.action'
import { toast } from 'react-toastify'

const styles = () => ({
  input: {
    width: '100%',
    marginBottom: '1rem',
  },
})

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleOnChange = (e) => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleAddQuestion = (e) => {
    e.preventDefault()

    const { optionOne: optionOneText, optionTwo: optionTwoText } = this.state
    const { authedUser: author, dispatch, history } = this.props

    dispatch(
      handleAddQuestion({
        optionOneText,
        optionTwoText,
        author,
      })
    )
    toast.success('New Question added Successfully')
    history.push('/')
  }

  render() {
    const { classes } = this.props
    const { optionOne, optionTwo } = this.state
    return (
      <Container className="content" component="main">
        <h1 className="content__title">Create New Question</h1>
        <h2>Would you rather...</h2>
        <form autoComplete="off" className="add-new-question-form">
          <TextField
            className={classes.input}
            id="optionOne"
            label="Option 1"
            placeholder="Option 1"
            color="secondary"
            required
            value={optionOne}
            onChange={this.handleOnChange}
          />
          <Divider>Or</Divider>
          <TextField
            className={classes.input}
            id="optionTwo"
            label="Option 2"
            placeholder="Option 2"
            color="secondary"
            required
            value={optionTwo}
            onChange={this.handleOnChange}
          />

          <Button
            type="submit"
            color="secondary"
            fullWidth
            disabled={!optionOne || !optionTwo}
            variant="contained"
            onClick={this.handleAddQuestion}
          >
            Add Question
          </Button>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => ({ users, authedUser })

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(NewQuestion))
)
