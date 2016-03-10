/*************************************************************
 *
 *    Task 5: Button component with props
 *    Refactoring some mixed button design and functionality
 *
 *    - Create a Button component with the .component-button class
 *    - Make the component accept an href prop
 *    - Use the prop to return a button or anchor tag
 *    - Replace the current buttons with the new component
 *
 *************************************************************/


// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './buttons.css'

const Button = React.createClass({
  propTypes: {

  },

  render() {

  },
})

// application component
function App() {
  return (
    <div>
      <button>Close</button>
      <input type="submit" value="Submit" />
      <button className="checkout">Checkout Now</button>
      <a href="#back">Take me back!</a>
    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
