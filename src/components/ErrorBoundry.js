import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class ErrorBoundry extends Component {
  state = {
    error:false
  }
  componentDidCatch() {
    this.setState({error:true})
  }
  render(){
    const {error} = this.state
    return(
      error
      ? (
        <Paper elevation={1}>
          <Typography variant="headline" component="h3">
            Uppss!! Something went wrong, sorry!
          </Typography>
          <Typography component="p">
            Please reload the page to reset the app!
          </Typography>
        </Paper>
      )
      : this.props.children
    )
  }
}

export default ErrorBoundry
