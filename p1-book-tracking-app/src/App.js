import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import BookShelf from './bookshelf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BookShelf />
      </div>
    );
  }
}

export default App;
