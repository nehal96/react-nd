import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailedPoll from './DetailedPoll'
import PollResults from './PollResults'
import { handleVoteOnQuestion } from '../actions/shared'

class Question extends Component {
  state = {
    showResults: false
  }

  handleVote = (e) => {
    const elementID = e.target.id
    const { questionID, dispatch } = this.props

    switch(elementID) {
      case 'option-1-detailed':
        this.setState({
          showResults: true
        })
        return dispatch(handleVoteOnQuestion(questionID, 'optionOne'))
      case 'option-2-detailed':
        this.setState({
          showResults: true
        })
        return dispatch(handleVoteOnQuestion(questionID, 'optionTwo'))
      default:
        alert('There was an error while voting. Try again')
    }
  }

  render() {
    const { authedUser, questionID } = this.props
    const { showResults } = this.state

    return(
      <div>
        { showResults === true
          ? <PollResults />
          : <DetailedPoll questionID={ questionID } handleVote={ this.handleVote } />
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params

  return {
    authedUser,
    questions,
    questionID: id
  }
}

export default connect(mapStateToProps)(Question)
