import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  state = {
  }

  render() {
    return (
      <div className='book'>
      </div>
    )
  }
}

export default Book;
