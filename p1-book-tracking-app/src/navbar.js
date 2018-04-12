import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-spacer'></div>
        <div className='navbar-heading'>
          <h4>Listopia</h4>
        </div>
        <div className='navbar-search-bar'>
          <input className='search-bar' type='text' placeholder='Search' />
        </div>
      </nav>
    )
  }
}

export default Navbar
