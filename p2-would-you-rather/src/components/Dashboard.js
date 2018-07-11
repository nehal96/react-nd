import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UndetailedPoll from './UndetailedPoll'

class Dashboard extends Component {
  state = {
    showUnanswered: true
  }

  handleChange = (e) => {
    const elementID = e.target.id

    elementID === 'answered-q-btn'
    ? this.setState({
        showUnanswered: false
      })
    : this.setState({
        showUnanswered: true
      })
  }

  render() {
    const { showUnanswered } = this.state
    const {
      authedUser, unansweredQuestionIDs, answeredQuestionIDs
    } = this.props

    // if (authedUser === null) {
    //   return <Redirect to='/login' />
    // }

    return(
      <div className='container'>
        <div className='dashboard-container'>
          {/* There must be a shorter, less copy-pasty way of doing this
              Check React.createClass (I think) */}
          { showUnanswered === true
            ? <div className='question-controls'>
                <div
                  id='unanswered-q-btn'
                  className='question-type-btn active-btn'
                  onClick={ this.handleChange }>Unanswered questions</div>
                <div
                  id='answered-q-btn'
                  className='question-type-btn'
                  onClick={ this.handleChange }>Answered questions</div>
              </div>
            : <div className='question-controls'>
                <div
                  id='unanswered-q-btn'
                  className='question-type-btn'
                  onClick={ this.handleChange }>Unanswered questions</div>
                <div
                  id='answered-q-btn'
                  className='question-type-btn active-btn'
                  onClick={ this.handleChange }>Answered questions</div>
              </div>
          }

          <ul className='questions'>
            { showUnanswered === true
              ? unansweredQuestionIDs.map((questionID) => (
                  <li key={ questionID }>
                    <UndetailedPoll
                      questionID={ questionID }
                      answeredPoll={ !showUnanswered }/>
                  </li>
                ))
              : answeredQuestionIDs.map((questionID) => (
                  <li key={ questionID }>
                    <UndetailedPoll
                      questionID={ questionID }
                      answeredPoll={ !showUnanswered }/>
                  </li>
                ))
              }
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answeredQuestionIDs = Object.keys(users[authedUser].answers)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  
  const unansweredQuestionIDs = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .filter((questionID) => answeredQuestionIDs.indexOf(questionID) < 0)

  return {
    authedUser,
    answeredQuestionIDs,
    unansweredQuestionIDs
  }
}

export default connect(mapStateToProps)(Dashboard)
