import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  state = {
    Option1Text: '',
    Option2Text: ''
  }

  handleChange = (e) => {
    const elementId = e.target.id
    const text = e.target.value

    if (elementId === 'option-1-input') {
      this.setState(() => ({
        Option1Text: text
      }))
    } else {
      this.setState(() => ({
        Option2Text: text
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // todo:
  }

  render() {
    return(
      <div class='container'>
        <div class='dashboard-container'>
          <div className='panel'>
            <div className='panel-header teal-panel'>
              <h3 className='header-title'>Create a Question</h3>
            </div>
            <div class='panel-body'>
              <h4 class='would-you-rather'>Would You Rather...</h4>
              <form className='login-form' onSubmit={ this.handleSubmit }>
                <input
                  id='option-1-input'
                  className='question-input'
                  type='text'
                  placeholder='Option 1'
                  onChange={ this.handleChange }/>
                <div class='create-question-sep'>OR</div>
                <input
                  id='option-2-input'
                  className='question-input'
                  type='text'
                  placeholder='Option 2'
                  onChange={ this.handleChange }/>
                <button className='btn new-question-btn' type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)
