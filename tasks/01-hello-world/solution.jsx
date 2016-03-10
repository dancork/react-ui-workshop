// dependencies
import React from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'

// application component
const App = React.createClass({
  render() {
    return <h1>Hello World</h1>
  }
})


// render the application
render( <App />, document.getElementById('app') )
