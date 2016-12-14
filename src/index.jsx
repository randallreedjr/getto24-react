var React = require('react')
var ReactDOM = require('react-dom')

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// import $ from 'jquery'
import './styles/style.scss'

import App from './components/App.jsx'
import About from './components/About.jsx'
import Check from './components/Check.jsx'
import Container from './components/Container.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Container} />
        <Route path="/check" component={Check} />
        <Route path="/play" component={Problem} />
        <Route path="/solutions" component={Solution} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
