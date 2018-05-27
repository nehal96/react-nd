import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    results: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = (query) => {
    this.updateQuery('')
  }

  search = (input) => {
    const query = input;
    //console.log(query)

    if (!query) {
      this.setState({searchResults: []});
      return;
    }

    BooksAPI.search(query)
      .then((searchResults) => {
        if (!searchResults) {
          this.setState(() => ({
            results: []
          }))
          return "Didn't go through."
        }

        //if (searchResults.error) {
          //return
        //}
        this.setState(() => ({
          results: searchResults
        }))
      })

    console.log(this.state.results)
  }

  render() {
    const { query } = this.state.query
    const { results } = this.state.results
    const { books } = this.props

    console.log(query)
    //console.log(results)
    //this.search(query)

    //console.log(books)

    //const showingBooks = query === ''
      //? books
      //: books.filter((book) => (
        //book.title.toLowerCase().includes(query.toLowerCase()) ||
        //book.authors.map((author) => (author.toLowerCase()))
          //          .includes(query.toLowerCase())
      //))

    //books.forEach((book) => (
      //console.log(book.authors.map((author) => (author.toLowerCase())))
    //))


    //console.log(query)

    return (
      <div id='search'>
        <div className='search-input-container'>
          <input
            className='search-books'
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(event) => this.search(event.target.value)}
          />
        {/* Spaces don't work on input */}
        </div>
        <div className='search-results'>
          {/*{this.state.results && (
            <ListBooks
              books={results}
            />
          )}*/}
        </div>
      </div>
    )
  }

}

export default SearchPage
