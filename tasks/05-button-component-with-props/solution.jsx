// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './buttons.css'

const Button = React.createClass({
  propTypes: {
    children: PropTypes.string,
    href: PropTypes.string
  },

  render() {
    const { children, href } = this.props
    if (href) {
      return <a href={href} className="component-button">{children}</a>
    }
    return <button className="component-button">{children}</button>
  },
})

// application component
function App() {
  return (
    <div>
      <Button>Close</Button>
      <Button>Submit</Button>
      <Button>Checkout Now</Button>
      <Button href="#back">Take me back!</Button>
    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
