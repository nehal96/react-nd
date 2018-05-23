import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Navbar from './navbar';
import BookShelf from './Bookshelf';
import { Route } from 'react-router-dom'

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
    //console.log(this.state)
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <Navbar />
            <BookShelf
              books={this.state.books}
            />
          </div>
        )}
        />
        <Route path='/search' render={({history}) => (
          <Navbar />
        )}
        />
      </div>
    );
  }
}

export default App;
