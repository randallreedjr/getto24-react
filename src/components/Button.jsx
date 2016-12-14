import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Button extends React.Component {
  render() {
    return (
      <Link to={this.props.destination} className="button">
        <div className={`button-${this.props.color} button`}>
          {this.props.label}
        </div>
      </Link>
    )
  }
}

Button.propTypes = {
  destination: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
