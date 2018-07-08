import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class UndetailedPoll extends Component {
  render() {
    const { question } = this.props
    const {
      id, name, avatarURL, author, timestamp, optionOne, optionTwo
    } = question

    return (
      <div className='question'>
        <div className='panel-header'>
          <img src={ avatarURL } alt={ `Avatar of ${name}`} className='avatar'/>
          <p><strong>{ name }</strong> asks:</p>
        </div>
        <div className='panel-body'>
          <h4 className='would-you-rather'>Would You Rather...</h4>
          <div className='options'>
            <div id='option-1' className='option'>{ optionOne.text }</div>
            <div className='option-divider'>OR</div>
            <div id='option-2' className='option'>{ optionTwo.text }</div>
          </div>
          <button className='btn view-poll-btn'>View Poll</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { questionID }) {
  const question = questions[questionID]
  const user = users[question.author]

  return {
    authedUser,
    question: question
      ? formatQuestion(question, user)
      : null
  }
}

export default connect(mapStateToProps)(UndetailedPoll)
