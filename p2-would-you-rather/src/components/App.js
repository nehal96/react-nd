import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        { this.props.loading === true
          ? null
          : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    // Stick with authedUser for now, users.length is giving weird results
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
