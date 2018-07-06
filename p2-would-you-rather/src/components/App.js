import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
            <div className="App">
              { this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={ Dashboard } />
                    <Route path='/login' component={ Login } />
                  </div>
              }
            </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ users }) {
  return {
    // Stick with authedUser for now, users.length is giving weird results
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App)
