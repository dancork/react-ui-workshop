// dependencies
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import 'mocha!./tests'
import './components.css'

const IconList = React.createClass({

  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element)
  },

  render() {
    return (
      <ul className="component-icon-list">{this.props.children}</ul>
    )
  }

})

const IconListItem = React.createClass({

  propTypes:{
    icon: PropTypes.oneOf(['tick', 'cross']),
    children: PropTypes.string.isRequired
  },

  render() {
    const classes = classNames('icon', this.props.icon)

    return (
      <li className="component-icon-list-item">
        <i className={classes}/> {this.props.children}
      </li>
    )
  }

})

// application component
function App() {
  return (
    <IconList>
      <IconListItem icon="tick">True</IconListItem>
      <IconListItem icon="cross">False</IconListItem>
    </IconList>
  )
}


// render the app
render(<App />, document.getElementById('app'))
