import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks';
//import { Link } from 'react-router-dom';

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    let currentlyReadingBooks = books.filter(book =>
      book.shelf === "currentlyReading")

    let wantToReadBooks = books.filter(book =>
      book.shelf === "wantToRead")

    let readBooks = books.filter(book =>
      book.shelf === "read")

    return (
      <section className='bookshelf-container'>
        <div className='bookshelf'>
          <div className='bookshelf-heading'>
            <h5>Currently Reading</h5>
            <ListBooks
              books={currentlyReadingBooks}
            />
          </div>
          <div className='bookshelf-heading'>
            <h5>Want to Read</h5>
            <ListBooks
              books={wantToReadBooks}
            />
          </div>
          <div className='bookshelf-heading'>
            <h5>Read</h5>
            <ListBooks
              books={readBooks}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default BookShelf
