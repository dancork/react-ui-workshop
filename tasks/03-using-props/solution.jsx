// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'

// bio component
const Bio = React.createClass({
  propTypes: {
    name: PropTypes.string,
    age: PropTypes.number,
    interests: PropTypes.array
  },

  renderInterestItems() {
    return this.props.interests.map(function(interest) {
      return <li>{interest}</li>
    })
  },

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <ul>
          {this.renderInterestItems()}
        </ul>
      </div>
    )
  }
})

// application component
const App = React.createClass({

  render() {
    return <Bio name="John" age={45} interests={['cycling', 'food', 'web']} />
  }

})


// render the application
render( <App/>, document.getElementById('app') )
