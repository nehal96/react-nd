import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PollResults extends Component {
  render() {
    const {
      optionOne, optionTwo, optionOneVotes, optionTwoVotes, totalVotes,
      optionOnePercent, optionTwoPercent
    } = this.props

    return(
      <div>
        <div className='dashboard-container'>
          <div className='panel'>
            <div className='panel-header teal-panel'>
              <h3 className='header-title'>Results</h3>
            </div>
            <div className='panel-body'>
              <h3 className='would-you-rather'>Would You Rather...</h3>
              <table className='results'>
                <tbody>
                  <tr>
                    <td className='option-results'>{ optionOne.text }</td>
                    <td className='option-votes'>
                      <div className='percent-bar' style={ {width: optionOnePercent + '%'} }>
                        <div className='percent-text-label'>{ optionOnePercent + '%' }</div>
                      </div>
                      <div className='vote-details'>{ optionOneVotes.length + ' of ' + totalVotes + ' votes'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className='option-results'>{ optionTwo.text }</td>
                    <td className='option-votes'>
                      <div className='percent-bar' style={ {width: optionTwoPercent + '%'} }>
                        <div className='percent-text-label'>{ optionTwoPercent + '%' }</div>
                      </div>
                      <div className='vote-details'>{ optionTwoVotes.length + ' of ' + totalVotes + ' votes'}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link className='btn view-poll-btn' to='/'>Back to Questions</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { questionID } = props
  const question = questions[questionID]
  const { optionOne, optionTwo } = question
  const optionOneVotes = optionOne.votes
  const optionTwoVotes = optionTwo.votes
  const totalVotes = optionOneVotes.length + optionTwoVotes.length
  const optionOnePercent = Math.round((optionOneVotes.length / totalVotes) * 100)
  const optionTwoPercent = Math.round((optionTwoVotes.length / totalVotes) * 100)

  return {
    authedUser,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    optionOnePercent,
    optionTwoPercent
  }
}

export default connect(mapStateToProps)(PollResults)
