import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailedPoll from './DetailedPoll'

class Question extends Component {
  state = {
    showResults: false
  }
  
  render() {
    const { authedUser, questionID } = this.props

    return(
      <div>
        <DetailedPoll questionID={ questionID } />
      </div>
    )
  }
}

function mapStateToProps({ authedUser }, props) {
  const { id } = props.match.params

  return {
    authedUser,
    questionID: id
  }
}

export default connect(mapStateToProps)(Question)
