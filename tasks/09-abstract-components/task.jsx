/*************************************************************
 *
 *    Task 9: Abstract Components
 *    Seperating concerns making components reusable
 *
 *    - Create an AbstractInput component containing an input
 *      and optional error
 *    - onBlur validate that the value is an integer and if validation
 *      fails show the error
 *    - Create 2 branded components that wrap this ( use the
 *      classes in the css files )
 *    - Add one of each component to the app
 *
 *    Finished early?
 *    - Try delegating all state up to the application
 *
 *************************************************************/

// dependencies
import React from 'react'
import { render } from 'react-dom'
import 'mocha!./tests'
import './brand-a.css'
import './brand-b.css'


// application component
function App() {
  return (
    <div>

    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
