var React = require('react')
var ReactDOM = require('react-dom')

var Container = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Jumbotron />
      </div>
    )
  }
})

var Navbar = React.createClass({
  render: function() {
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
})

var Jumbotron = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <h2>How to Play</h2>
        <p>Use all four numbers exactly one time, in conjunction with the operations of addition (+), subtraction (-), multiplication (*), and division (/), to yield a result of
          <strong> 24</strong>
          .
        </p>
        <br />
        <Button color="green" label="Give me problems" />
        <Button color="red" label="Show me solutions" />
      </div>
    )
  }
})

var Button = React.createClass({
  render: function(){
    return (
      <div className={this.props.color + ' mybutton'}>
        <a href="/problem">{this.props.label}</a>
      </div>
    )
  }
})

var GetTo24 = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar />
        <Container />
      </div>
    )
  }
})

ReactDOM.render(<GetTo24 />, document.getElementById('app'));
