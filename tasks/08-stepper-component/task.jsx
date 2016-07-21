/*************************************************************
 *
 *    Task 8: Stepper Component
 *    A form field where the value can be increased and
 *    decreased via + and - buttons
 *
 *    - Use this.state.value as the value of the input
 *    - Add an onClick listener to the - button to decrease
 *      the state value by 1 using this.setState()
 *    - Add an onClick listener to the + button to increase
 *      the state value by 1 using this.setState()
 *
 *    Finished early?
 *    - Use props/defaultProps to add upper & lower limit of
 *      minus 10 and 10
 *    - Make the increment variable via props
 *
 *************************************************************/


// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './stepper.css'

const Stepper = React.createClass({

  getInitialState() {
    return {
      value: 0
    }
  },

  render() {
    return (
      <div className="component-stepper">
        <button>-</button>
        <input readOnly />
        <button>+</button>
      </div>
    )
  }

})

// application component
function App() {
  return <Stepper />
}


// render the app
render(<App />, document.getElementById('app'))
