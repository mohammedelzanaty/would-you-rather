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
import { Link } from 'react-router-dom'
import { Divider } from './index'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
  },
}))

const question = {
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: ['sarahedo'],
    text: 'have horrible short term memory',
  },
  optionTwo: {
    votes: [],
    text: 'have horrible long term memory',
  },
}

const Question = () => {
  const classes = useStyles()
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item md={2}>
            <img
              src={`https://randomuser.me/api/portraits/men/32.jpg`}
              alt={`question avatar`}
            />
          </Grid>
          <Grid item md={10}>
            <Typography gutterBottom>
              <span className={classes.title}>Mohammed Elzanaty</span> asks
              Would you rather
            </Typography>
            <Typography color="textSecondary">
              {question.optionOne.text}
            </Typography>
            <Divider>Or</Divider>
            <Typography color="textSecondary">
              {question.optionTwo.text}?
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link to={`/questions/${1}`} style={{ width: '100%' }}>
          <Button type="submit" fullWidth variant="contained" color="secondary">
            View Question
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Question
