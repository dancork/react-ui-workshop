// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './brand-a.css'
import './brand-b.css'

function BrandAInput() {
  return (
    <div className="brand-a-input">
      <AbstractInput />
    </div>
  )
}

function BrandBInput() {
  return (
    <div className="brand-b-input">
      <AbstractInput />
    </div>
  )
}

const AbstractInput = React.createClass({

  getInitialState() {
    return {
      error: false
    }
  },

  handleBlur(e) {
    this.setState({
      error: parseInt(e.target.value) != e.target.value
    })
  },

  render() {
    return (
      <div>
        <input onBlur={this.handleBlur} />
        {this.state.error &&
          <p className="error">The value should be an integer</p>
        }
      </div>
    )
  }

})

// application component
function App() {
  return (
    <div>
      <BrandAInput />
      <BrandBInput />
    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
