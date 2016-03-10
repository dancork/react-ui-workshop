/*************************************************************
 *
 *    Task 3: Using props
 *    An introduction to rendering props passed to a component
 *
 *    - In the Bio component:
 *      - Display the 'name' prop in an h1
 *      - Display the 'age' prop in an h2
 *      - Show each of the items in 'interests' in a UL
 *
 *************************************************************/

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

  render() {
    return (
      <div></div>
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
