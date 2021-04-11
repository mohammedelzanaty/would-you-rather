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
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Copyright } from '../components'
import LOGO from '../assets/logo.png'
import { setAuthedUser } from '../actions/authed-user.action'

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
    authedUser: '',
  }

  handleChange = (event) => {
    this.setState({ authedUser: event.target.value })
    this.props.dispatch(setAuthedUser(event.target.value))
  }

  render() {
    const { classes, users } = this.props
    const { authedUser } = this.state
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
              <InputLabel color="secondary">Select User</InputLabel>
              <Select
                value={authedUser}
                onChange={this.handleChange}
                color="secondary"
              >
                {users &&
                  Object.keys(users)
                    .map((userId) => ({
                      avatarURL: users[userId].avatarURL,
                      id: users[userId].id,
                      name: users[userId].name,
                    }))
                    .map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        <img
                          src={user.avatarURL}
                          alt={`${user.name} avatar`}
                          width="40"
                        />{' '}
                        {user.name}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={(event) => {
                event.preventDefault()
                if (this.state.authedUser) {
                  this.props.history.push('/')
                } else {
                  alert('Please Select user first')
                }
              }}
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

const mapStateToProps = ({ users }) => ({
  users,
})

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(withRouter(Login))
)
