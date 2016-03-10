// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import 'mocha!./tests'
import './alerts.css'

const Alert = React.createClass({
  propTypes: {
    success: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool
  },

  render() {
    const { success, error, warning, large, small, title, children } = this.props
    const classes = classNames({
      'component-alert': true,
      success,
      error,
      warning,
      large,
      small
    })

    return (
      <div className={classes}>
        <h4>{title}</h4>
        {children}
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
