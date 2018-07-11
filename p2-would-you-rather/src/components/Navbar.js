import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return(
      <nav className='nav'>
        <div className='nav-links'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active-nav'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new' activeClassName='active-nav'>
                Create Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='active-nav'>
                Leaderboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='login-logout'>
          <div className='welcome-message'>Welcome, User</div>
          <button className='btn logout-btn'>Logout</button>
        </div>
      </nav>
    )
  }
}

export default Navbar
