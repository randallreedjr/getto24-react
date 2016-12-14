import React, { PropTypes } from 'react'

export default class Check extends React.Component {
  render() {
    return(
      <div>Check</div>
    )
  }
}

Check.propTypes = {
  problem: PropTypes.string.isRequired,
  submission: PropTypes.string.isRequired
}
