const React = require('react')
const ReactDOM = require('react-dom')

const App = require('./App')

// routes
const Home = require('./views/Home')
const NotFound = require('./views/NotFound')

const {Router, Route, Link, browserHistory} = require('react-router')

var Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  }
})

ReactDOM.render(<Routes />, document.getElementById('root'));
