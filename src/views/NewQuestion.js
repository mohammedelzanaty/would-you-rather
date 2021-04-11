import React, { Component } from 'react'
import { Button, Container, TextField, withStyles } from '@material-ui/core'
import { Divider } from '../components'

const styles = () => ({
  input: {
    width: '100%',
    marginBottom: '1rem',
  },
})

class NewQuestion extends Component {
  render() {
    const { classes } = this.props
    return (
      <Container className="content" component="main">
        <h1 className="content__title">Create New Question</h1>
        <h2>Would you rather...</h2>
        <form autoComplete="off" className="add-new-question-form">
          <TextField
            className={classes.input}
            id="option-1"
            label="Option 1"
            placeholder="Option 1"
            color="secondary"
            required
          />
          <Divider>Or</Divider>
          <TextField
            className={classes.input}
            id="option-2"
            label="Option 2"
            placeholder="Option 2"
            color="secondary"
            required
          />

          <Button type="submit" color="secondary" fullWidth variant="contained">
            Add Question
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(NewQuestion)
