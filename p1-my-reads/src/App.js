import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  // AJAX call to get book data from Udacity server
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Bookshelf
              books={this.state.books}
            />
            <div className="open-search">
              <Link to='/search'>
                Add a book
              </Link>
            </div>
          </div>
        )}
        />
      <Route path='/search' render={(history) => (
        <Search />
      )}
      />
    </div>
    )
  }
}

export default BooksApp
