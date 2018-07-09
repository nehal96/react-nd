import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {
    const { question } = this.props
    const { optionOne, optionTwo } = question
    const optionOneVotes = optionOne.votes
    const optionTwoVotes = optionTwo.votes
    const totalVotes = optionOneVotes.length + optionTwoVotes.length
    const optionOnePercent = Math.round((optionOneVotes.length / totalVotes) * 100)
    const optionTwoPercent = Math.round((optionTwoVotes.length / totalVotes) * 100)

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
                    </td>
                  </tr>
                  <tr>
                    <td className='option-results'>{ optionTwo.text }</td>
                    <td className='option-votes'>
                      <div className='percent-bar' style={ {width: optionTwoPercent + '%'} }>
                        <div className='percent-text-label'>{ optionTwoPercent + '%' }</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

  return {
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(PollResults)
