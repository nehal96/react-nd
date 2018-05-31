import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, updateShelf } = this.props

    let currentlyReadingBooks = books.filter(book =>
      book.shelf === "currentlyReading")

    let wantToReadBooks = books.filter(book =>
      book.shelf === "wantToRead")

    let readBooks = books.filter(book =>
      book.shelf === "read")

    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ListBooks
              books={currentlyReadingBooks}
              updateShelf={updateShelf}
            />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ListBooks
              books={wantToReadBooks}
              updateShelf={updateShelf}
            />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ListBooks
              books={readBooks}
              updateShelf={updateShelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelf
