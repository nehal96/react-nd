import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: [],
    error: false
  }

  bookSearch = (event) => {
    // Get query from input value
    const query = event.target.value.trim()

    // Change state
    this.setState({ query: query })

    // If there's a query being made, make an API call to get the books
    if (query) {
      BooksAPI.search(query)
        .then((searchResults) => {
          // If there are search results, update the state to reflect that.
          if (searchResults.length > 0) {
            this.setState({
              results: searchResults,
              error: false
            })
          } else {
            this.setState({
              results: [],
              error: true
            })
          }
        })
    } else {
      this.setState({
        results: [],
        error: false
      })
    }
  }

  render() {
    const { query, results, error } = this.state
    const { books, updateShelf } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.bookSearch }
            />
          </div>
        </div>
        <div className="search-books-results">
          { results.length > 0 && (
            <ListBooks
              books={results}
              bookshelf={books}
              updateShelf={updateShelf}
            />
          )}
          { error && (
            <div className="search-error">
              <h3>Your search did not return any books.</h3>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search
