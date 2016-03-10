/*************************************************************
 *
 *    Task 4: Button component styling
 *    Refactoring some mixed button design
 *
 *    - Create a button component
 *    - Use the `children` prop to pass through anything
 *      contained within the tags
 *    - Use the new component-button class
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

  }
})


// application component
function App() {
  return (
    <div>
      <button className="rounded">Close</button>
      <button className="horrible">Submit</button>
      <button className="aaargh">What Is This?</button>
      <button className="checkout">Checkout Now</button>
      <button className="order">Order Now</button>
    </div>
  )
}


// render the application
render(<App />, document.getElementById('app'))
