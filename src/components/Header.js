import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Button,
  Icon,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import LOGO from '../assets/logo.png'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authed-user.action'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  logo: {
    borderRadius: '10px',
  },
  meta: {
    display: 'flex',
  },
}))

const NAV_ITEMS = [
  { id: 1, label: 'Dashboard', path: '/' },
  { id: 2, label: 'New Question', path: '/new' },
  { id: 3, label: 'Leader Board', path: '/leader-board' },
]

function Header({ users, authedUser, dispatch, history }) {
  const classes = useStyles()
  const currentUser = users[authedUser]
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Box className={`${classes.toolbarTitle}`}>
          <Link to={'/'}>
            <img
              src={LOGO}
              alt="would you rather logo"
              width="40"
              className={`${classes.logo}`}
            />
          </Link>
        </Box>
        <nav>
          {NAV_ITEMS &&
            NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.id}
                variant="button"
                color="textPrimary"
                to={navItem.path}
                className={classes.link}
              >
                {navItem.label}
              </Link>
            ))}
        </nav>
        <Box className={classes.meta}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={currentUser.avatarURL} />
            </ListItemAvatar>
            <ListItemText primary={currentUser.name} />
          </ListItem>
          <Button
            onClick={() => {
              dispatch(removeAuthedUser())
              history.push('/login')
            }}
            color="secondary"
            className={classes.link}
          >
            <Icon>logout</Icon>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser, users })
export default withRouter(connect(mapStateToProps)(Header))
