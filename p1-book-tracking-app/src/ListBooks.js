import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    //books.forEach(function(book) {
      //console.log(book.authors)
    //})

    return (
      <div className='card-deck-container'>
        <div className='card-deck'>
          {books.map((book) => (
            <div key={book.id} className='card book-card'>
              <img className='card-img img-fluid' src={ book.imageLinks.thumbnail } alt={ book.title }></img>
              <h6 className='book-title'>{ book.title }</h6>
              <p className='book-subtitle'>{
                    book.authors.length > 1 ?
                    book.authors.map((author) => (author + ', ')) :
                    book.authors[0]
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ListBooks
