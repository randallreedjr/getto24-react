import React from 'react'

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
              <li className="active"><a href="/">Home</a></li>
              <li><a href="/problem">Play</a></li>
              <li><a href="/solve">Solutions</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
