import React from 'react'
import { Footer, Header, Content } from '../components'
import { Container, Grid } from '@material-ui/core'

const TheLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Content />
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default TheLayout
