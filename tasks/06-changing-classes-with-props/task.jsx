/*************************************************************
 *
 *    Task 6: Changing Classes with Props
 *    Using the classnames library to implement conditional classes on our components
 *    https://github.com/JedWatson/classnames
 *
 *    - Add title as a propType of string & display it as an h4
 *    - Display the children from props underneath the h4
 *    - Add bool propTypes for success, error, warning, large and small
 *    - Use the classNames library to conditionally add .success, .error, .warning, .large and .small classes based on the props
 *
 *************************************************************/


// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import 'mocha!./tests'
import './alerts.css'

const Alert = React.createClass({
  propTypes: {},

  render() {
    const classes = classNames({
      'component-alert': true
    })

    return (
      <div className={classes}>

      </div>
    )
  },
})

// application component
function App() {
  return (
    <div>
      <Alert title="Success" success>This is a successful alert</Alert>
      <Alert title="Error" error>This is an error alert</Alert>
      <Alert title="Large" large>This is a large alert</Alert>
      <Alert title="Small Warning" small warning>This is a small warning alert</Alert>
    </div>
  )
}


// render the app
render(<App />, document.getElementById('app'))
