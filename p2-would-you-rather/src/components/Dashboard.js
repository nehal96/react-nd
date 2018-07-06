import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { authedUser } = this.props

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
          <div className='questions'>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
