import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelf: PropTypes.array,
    updateShelf: PropTypes.func.isRequired
  }

  // Function that's called when a shelf option is changed.
  changeShelf = (event) => {
    // Gets shelf value from event
    const shelf = event.target.value

    this.props.updateShelf(this.props.book, shelf)
  }

  render() {
    const { book, bookshelf } = this.props

    const placeholder_img = 'http://via.placeholder.com/128x200'
    const thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : placeholder_img
    const title = book.title ? book.title : "No title"

    // This step makes sure that when a user searchs, the books that are already in his/her bookshelf
    // will show the selected shelf for the book. All other books will be under None.
    let currentShelf = 'none'

    if (bookshelf) {
      bookshelf.forEach((b) => {
        if (b.id === book.id) {
          currentShelf = b.shelf
        }
      })
    }

    return (
      <div className='card book-info-card' style={{ width: '128px'}}>
        <div className="book-top">
          <img className="card-img img-fluid" src={thumbnail} alt={ book.title } style={{ width: '128px', height: '200px'}}></img>
          <div className="book-shelf-changer">
            <select onChange={ this.changeShelf } value={ currentShelf }>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-info">
          <div className="book-title">{ title }</div>
          <div className="book-authors">{
            book.authors && (
              book.authors.length > 1 ?
              book.authors.map((author) => (author + ', ')) :
              book.authors[0]
          )}
          </div>
        </div>
      </div>
    )
  }
}

export default Book;
