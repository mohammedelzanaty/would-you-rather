import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types' // ES6
import { Link } from 'react-router-dom'
import { Divider } from './index'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
  },
}))

const Question = ({ id, avatarURL, author, optionOne, optionTwo }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item md={2}>
            <img src={avatarURL} alt={`${author} avatar`} width="120px" />
          </Grid>
          <Grid item md={10}>
            <Typography gutterBottom>
              <span className={classes.title}>{author}</span> asks Would you
              rather
            </Typography>
            <Typography color="textSecondary">{optionOne.text}</Typography>
            <Divider>Or</Divider>
            <Typography color="textSecondary">{optionTwo.text}?</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link to={`/question/${id}`} style={{ width: '100%' }}>
          <Button type="submit" fullWidth variant="contained" color="secondary">
            View Question
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

Question.protoTypes = {
  id: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  optionOne: PropTypes.shape({
    votes: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  optionTwo: PropTypes.array.isRequired,
}

export default Question
