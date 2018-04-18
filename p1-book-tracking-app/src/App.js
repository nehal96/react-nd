import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Navbar from './navbar';
import BookShelf from './Bookshelf';

class App extends Component {
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
      <div className="App">
        <Navbar />
        <BookShelf
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
