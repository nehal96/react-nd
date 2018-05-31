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

  // Method to update shelf on books database
  updateShelf = (book, shelf) => {
    // Update the shelf field of the book to match the newly selected shelf
    book.shelf = shelf

    // Remove the book with the old info from the books in state
    let updatedBookList = this.state.books.filter((b) => b.id !== book.id)

    // Add the book with the new info
    updatedBookList.push(book)

    // Set the state with the new book list
    this.setState({
      books: updatedBookList
    })

    // Update the original database to match
    BooksAPI.update(book, shelf)
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
              updateShelf={this.updateShelf}
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
