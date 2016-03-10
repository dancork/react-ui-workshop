// dependencies
import React from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'

// application component
function App() {
  return (
    <div>
      <h1>Hey Guys</h1>
      <p>Welcome to our React workshop</p>
      <h2>Things We Like</h2>
      <ul>
        <li>Food</li>
        <li>JavaScript</li>
        <li>Beer</li>
      </ul>
    </div>
  )
}

// render the application
render( <App />, document.getElementById('app') )
