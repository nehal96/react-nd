import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()

    console.log(e.target)
    // todo: handle submitting of username
  }

  render() {
    const { userIDs } = this.props

    return(
      <div className='login container'>
        <div className='login-container'>
          <div className='login-header'>
            <h3 className='text-center'>Login</h3>
          </div>
          <hr></hr>
          <div className='login-body'>
            <p>Select your username..</p>
            <form className='login-form' onSubmit={ this.handleSubmit }>
              <select>
                { userIDs.map((userID) =>(
                  <option value={ userID } key={ userID }>{ userID }</option>
                )) }
              </select>
              <button className='btn login-btn' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    userIDs: Object.keys(users)
      .sort()
  }
}

export default connect(mapStateToProps)(Login)
