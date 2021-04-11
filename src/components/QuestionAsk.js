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

  render() {
    const { classes } = this.props
    const { value } = this.state
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
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={this.handleRadioChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <Button type="submit" color="secondary" fullWidth variant="contained">
            Submit Question Answer
          </Button>
        </FormControl>
      </Container>
    )
  }
}

export default withStyles(styles)(QuestionAsk)
