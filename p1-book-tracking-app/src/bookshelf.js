import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class BookShelf extends Component {
  render() {
    return (
      <section className='bookshelf-container'>
        <div className='bookshelf'>
          <div className='bookshelf-heading'>
            <h5>Currently Reading</h5>
          </div>
          <div className='bookshelf-heading'>
            <h5>Want to Read</h5>
          </div>
          <div className='bookshelf-heading'>
            <h5>Read</h5>
          </div>
        </div>
      </section>
    )
  }
}

export default BookShelf
