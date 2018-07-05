import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        WOULD YOU RATHER
      </div>
    );
  }
}

export default connect()(App)
