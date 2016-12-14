import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Get to 24!</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/play">Play</Link></li>
              <li><Link to="/solution">Solutions</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
