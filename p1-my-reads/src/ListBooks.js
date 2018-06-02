import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelf: PropTypes.array,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, bookshelf, updateShelf } = this.props

    return (
      <div>
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                bookshelf={bookshelf}
                updateShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBooks
