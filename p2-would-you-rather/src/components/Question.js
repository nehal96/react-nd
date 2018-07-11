import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import DetailedPoll from './DetailedPoll'
import PollResults from './PollResults'
import Navbar from './Navbar'
import { handleVoteOnQuestion } from '../actions/shared'

class Question extends Component {
  state = {
    showResults: this.props.answeredPoll
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

    if (authedUser === null) {
      return <Redirect to='/login' />
    }

    return(
      <Fragment>
        <Navbar/>
        <div>
          { showResults === true
            ? <PollResults questionID= { questionID }/>
            : <DetailedPoll questionID={ questionID } handleVote={ this.handleVote } />
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params
  const { answeredPoll } = props.location.state

  return {
    authedUser,
    answeredPoll,
    questions,
    questionID: id
  }
}

export default connect(mapStateToProps)(Question)
