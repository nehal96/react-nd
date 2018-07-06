import React, { Component } from 'react'
import { connect } from 'react-redux'

class UndetailedPoll extends Component {
  render() {
    const { question, users } = this.props
    const { authorName } = question.author

    return (
      <div className='question'>
        <div className='question-asker'>
          <p>{ question.author } asks:</p>
        </div>
        <div className='question-body'>
          { question.id }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { questionID }) {
  const question = questions[questionID]
  // const authorName = users[question.author].name
  // console.log(authorName)

  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProps)(UndetailedPoll)
