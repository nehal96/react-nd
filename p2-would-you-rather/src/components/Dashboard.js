import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UndetailedPoll from './UndetailedPoll'

class Dashboard extends Component {
  render() {
    const { authedUser, questionIDs } = this.props

    // if (authedUser === null) {
    //   return <Redirect to='/login' />
    // }

    return(
      <div className='container'>
        <div className='dashboard-container'>
          <div className='question-controls'>
            <div id='unanswered-q-btn' className='question-type-btn active-btn'>Unanswered questions</div>
            <div id='answered-q-btn' className='question-type-btn'>Answered questions</div>
          </div>
          <ul className='questions'>
            { questionIDs.map((questionID) => (
              <li key={ questionID }>
                <UndetailedPoll questionID={ questionID }/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questionIDs: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(Dashboard)
