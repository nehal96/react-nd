import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderProfile from './LeaderProfile'

class Leaderboard extends Component {
  render() {
    const { uids } = this.props

    return(
      <div className='container'>
        <div className='dashboard-container'>
          <h1 className='text-center'>Leaderboard</h1>
          {uids.map((uid) => (
            <LeaderProfile key={ uid } uid={ uid } />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    uids: Object.keys(users)
      .sort((a, b) => {
        const scoreA = Object.keys(users[a].answers).length +
          Object.keys(users[a].questions).length

        const scoreB = Object.keys(users[b].answers).length +
          Object.keys(users[b].questions).length

        return scoreB - scoreA
      })
  }
}

export default connect(mapStateToProps)(Leaderboard)
