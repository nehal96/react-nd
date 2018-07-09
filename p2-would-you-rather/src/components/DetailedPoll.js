import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleVoteOnQuestion } from '../actions/shared'

class DetailedPoll extends Component {
  render() {
    const { question, handleVote } = this.props
    const {
      id, name, avatarURL, author, timestamp, optionOne, optionTwo
    } = question

    return(
      <div className='dashboard-container'>
        <div className='panel'>
          <div className='panel-header'>
            <img src={ avatarURL } alt={ `Avatar of ${name}`} className='avatar'/>
            <p>Asked by <strong>{ name }</strong></p>
          </div>
          <div className='panel-body'>
            <h3 className='would-you-rather-detailed'>Would You Rather...</h3>
              <div className='options'>
                <div
                  id='option-1-detailed'
                  className='option detailed-option'
                  onClick={ handleVote }>{ optionOne.text }
                </div>
                <div className='option-divider'>OR</div>
                <div
                  id='option-2-detailed'
                  className='option detailed-option'
                  onClick={ handleVote }>{ optionTwo.text }
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  // Get ID from URL
  const { questionID, handleVote } = props
  // console.log(questionID)
  const question = questions[questionID]
  const user = users[question.author]

  return {
    authedUser,
    handleVote,
    question: question
      ? formatQuestion(question, user)
      : null
  }
}

export default connect(mapStateToProps)(DetailedPoll)
