import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Button,
  Icon,
} from '@material-ui/core'
import LOGO from '../assets/logo.png'

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
}))

const NAV_ITEMS = [
  { id: 1, label: 'Dashboard', path: '/' },
  { id: 2, label: 'New Question', path: '/new' },
  { id: 3, label: 'Leader Board', path: '/leader-board' },
]

function Header(props) {
  const classes = useStyles()
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Box className={`${classes.toolbarTitle}`}>
          <img
            src={LOGO}
            alt="would you rather logo"
            width="40"
            className={`${classes.logo}`}
          />
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
        <Button
          onClick={() => {
            // TODO dispatch logout event
            props.history.push('/login')
          }}
          color="secondary"
          variant="outlined"
          className={classes.link}
        >
          <Icon>logout</Icon> Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header)
