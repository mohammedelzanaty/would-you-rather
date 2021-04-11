import React, { Component } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Copyright } from '../components'
import LOGO from '../assets/logo.png'

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    borderRadius: '10px',
    marginBottom: '20px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
})

class Login extends Component {
  state = {
    authedUser: null,
  }

  handleChange = (event) => {}

  render() {
    const { classes } = this.props
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <img
            src={LOGO}
            alt="would you rather logo"
            width="40"
            className={`${classes.logo}`}
          />
          <Typography component="h1" variant="h5">
            Sign in to Would You Rather Game By Selecting One of Those Users
          </Typography>

          <form className={classes.form}>
            <FormControl className={classes.formControl}>
              <InputLabel>Select User</InputLabel>
              <Select
                id="demo-simple-select"
                value={this.state.user}
                onChange={this.handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Login)
