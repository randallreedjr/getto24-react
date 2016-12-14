import React from 'react'
import Button from './Button.jsx'

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>How to Play</h2>
          <p>Use all four numbers exactly one time, in conjunction with the
             operations of addition (+), subtraction (-), multiplication (*),
             and division (/), to yield a result of<strong> 24</strong>.
          </p>
          <br />
          <div className="actions-container">
            <Button color="green" label="Give me problems" />
            <Button color="red" label="Show me solutions" />
          </div>
        </div>
      </div>
    )
  }
}
