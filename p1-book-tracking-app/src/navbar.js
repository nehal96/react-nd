import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-spacer'></div>
        <div className='navbar-heading'>
          <Link to='/'>
            <h4>Listopia</h4>
          </Link>
        </div>
        <div className='navbar-search-bar'>
          <input className='search-bar' type='text' placeholder='Search' />
        </div>
      </nav>
    )
  }
}

export default Navbar
