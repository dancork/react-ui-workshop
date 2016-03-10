// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './stepper.css'

const Stepper = React.createClass({

  propTypes: {
    upperLimit: PropTypes.number,
    lowerLimit: PropTypes.number,
    incrementValue: PropTypes.number
  },

  getDefaultProps() {
    return {
      upperLimit: 10,
      lowerLimit: -10,
      incrementValue: 1
    }
  },

  getInitialState() {
    return {
      value: 0
    }
  },

  increment() {
    const { value } = this.state
    const { incrementValue, upperLimit, lowerLimit } = this.props

    if ((value + incrementValue) > upperLimit)  {
      return this.setState({
        value: upperLimit
      })
    }
    this.setState({
      value: value + incrementValue
    })
  },

  decrement(){
    const { value } = this.state
    const { incrementValue, upperLimit, lowerLimit } = this.props

    if ((value - incrementValue) < lowerLimit)  {
      return this.setState({
        value: lowerLimit
      })
    }
    this.setState({
      value: value - incrementValue
    })
  },

  render() {
    return (
      <div className="component-stepper">
        <button onClick={this.decrement}>-</button>
        <input value={this.state.value} readOnly />
        <button onClick={this.increment}>+</button>
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
