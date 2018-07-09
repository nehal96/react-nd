import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleVoteOnQuestion } from '../actions/shared'

class DetailedPoll extends Component {
  handleOptionOne = (e) => {
    const { question, dispatch } = this.props
    const qid = question.id
    const answer = 'optionOne'

    dispatch(handleVoteOnQuestion(qid, answer))
  }

  handleOptionTwo = (e) => {
    const { question, dispatch } = this.props
    const qid = question.id
    const answer = 'optionTwo'

    dispatch(handleVoteOnQuestion(qid, answer))
  }

  render() {
    const { question } = this.props
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
                  onClick={ this.handleOptionOne }>{ optionOne.text }</div>
                <div className='option-divider'>OR</div>
                <div
                  id='option-2-detailed'
                  className='option detailed-option'
                  onClick={ this.handleOptionTwo }>{ optionTwo.text }</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  // Get ID from URL
  const { questionID } = props
  // console.log(questionID)
  const question = questions[questionID]
  const user = users[question.author]

  return {
    authedUser,
    question: question
      ? formatQuestion(question, user)
      : null
  }
}

export default connect(mapStateToProps)(DetailedPoll)
