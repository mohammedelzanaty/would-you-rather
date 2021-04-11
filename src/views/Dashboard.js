import React, { Component } from 'react'
import { Container, Tab, Tabs } from '@material-ui/core'
import { Question, TabPanel } from '../components'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `tab-panel-${index}`,
  }
}

class Dashboard extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <Container className="content">
        <h1 className="content__title">Dashboard</h1>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Unanswered Questions" {...a11yProps(0)} />
          <Tab label="Answered Questions" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Question />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Container>
    )
  }
}

export default Dashboard
