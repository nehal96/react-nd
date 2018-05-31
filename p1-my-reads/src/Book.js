import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  // Function that's called when a shelf option is changed.
  changeShelf = (event) => {
    // Gets shelf value from event
    const shelf = event.target.value
    
    this.props.updateShelf(this.props.book, shelf)
  }

  render() {
    const { book } = this.props

    const thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'N/A'
    const title = book.title ? book.title : "No title"

    return (
      <div className='book'>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select onChange={ this.changeShelf } value={ book.shelf }>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ title }</div>
        <div className="book-authors">{
          book.authors && (
            book.authors.length > 1 ?
            book.authors.map((author) => (author + ', ')) :
            book.authors[0]
        )}</div>
      </div>
    )
  }
}

export default Book;
