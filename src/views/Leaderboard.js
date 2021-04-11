import React, { Component } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core'
import { connect } from 'react-redux'
import sortBy from 'sort-by'

const styles = (theme) => ({
  root: {
    display: 'flex',
    margin: '1rem 0',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  name: {
    color: theme.palette.secondary.main,
  },
  question: {
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '12px',
  },
  scoreLabel: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  score: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white',
    background: theme.palette.secondary.main,
    padding: '1rem',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
})

class Leaderboard extends Component {
  render() {
    const { classes, users } = this.props
    return (
      <Container className="content" component="main">
        <h1 className="content__title">Leader Board</h1>
        {users &&
          Object.keys(users).length > 0 &&
          Object.keys(users)
            .map((userId) => ({
              id: userId,
              name: users[userId].name,
              avatarURL: users[userId].avatarURL,
              answeredQuestions: Object.keys(users[userId].answers).length,
              createdQuestions: users[userId].questions.length,
              score:
                Object.keys(users[userId].answers).length +
                users[userId].questions.length,
            }))
            .sort(sortBy('-score'))
            .map((user) => (
              <Card className={classes.root} key={user.id}>
                <CardMedia
                  className={classes.cover}
                  image={user.avatarURL}
                  title={user.name}
                />
                <CardContent className={classes.content}>
                  <Grid container spacing={1}>
                    <Grid item md={8}>
                      <Typography
                        component="h3"
                        variant="h3"
                        className={classes.name}
                        gutterBottom
                      >
                        {user.name}
                      </Typography>
                      <Typography component="h4" className={classes.question}>
                        Answered questions:
                        <span>{user.answeredQuestions}</span>
                      </Typography>
                      <Typography component="h4" className={classes.question}>
                        Created questions: <span>{user.createdQuestions}</span>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        component="h6"
                        align={'center'}
                        gutterBottom
                        className={classes.scoreLabel}
                      >
                        Score
                      </Typography>
                      <Typography component="h4" className={classes.score}>
                        {user.score}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
      </Container>
    )
  }
}
const mapStateToPro = ({ users }) => ({ users })

export default connect(mapStateToPro)(withStyles(styles)(Leaderboard))
