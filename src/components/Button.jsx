import React, { PropType } from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <div className={this.props.color + ' mybutton'}>
        <a href="/problem">{this.props.label}</a>
      </div>
    )
  }
}

Button.propTypes = {
  color: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
}
