import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return (
      <ul className='booklist'>
        {books.map((book) => (
          <li key={book.id} className='book-card'>
            <p className='book-title'>{ book.title }</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListBooks
