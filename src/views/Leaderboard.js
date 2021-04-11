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

const styles = (theme) => ({
  root: {
    display: 'flex',
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
    const { classes } = this.props
    return (
      <Container className="content" component="main">
        <h1 className="content__title">Leader Board</h1>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image="https://material-ui.com/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
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
                  Sarah Edo
                </Typography>
                <Typography component="h4" className={classes.question}>
                  Answered questions: <span>{12}</span>
                </Typography>
                <Typography component="h4" className={classes.question}>
                  Created questions: <span>{12}</span>
                </Typography>
              </Grid>
              <Grid
                container
                md={4}
                style={{
                  display: 'flex',
                }}
                direction={'column'}
                alignItems="center"
                justifyContent="center"
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
                  12
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(Leaderboard)
