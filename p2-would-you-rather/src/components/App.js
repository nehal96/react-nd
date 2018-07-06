import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import DetailedPoll from './DetailedPoll'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render() {
    const questionID = "8xf0y6ziyjabvozdd253nd"

    return (
      <Router>
        <Fragment>
          <LoadingBar />
            <div className="App">
              { this.props.loading === true
                ? null
                : <div>
                    <Route path='/id' render={
                        () => <DetailedPoll questionID={ questionID } />
                    } />}
                    <Route path='/' exact component={ Dashboard } />
                    <Route path='/login' component={ Login } />
                    <Route path='/new' component={ NewQuestion } />
                  </div>
              }
            </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps({ questions }) {
  return {
    // Stick with authedUser for now, users.length is giving weird results
    loading: Object.keys(questions).length === 0
  }
}

export default connect(mapStateToProps)(App)
