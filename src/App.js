const React = require('react')

require('!style!raw!less!../styles/main.less');

const App = React.createClass({
  childContextTypes: {
    contextState: React.PropTypes.object,
    updateContextState: React.PropTypes.func
  },

  getInitialState() {
    return {}
  },

  getChildContext() {
    return {
      contextState: this.state,
      updateContextState: this.updateContextState
    }
  },

  updateContextState(newState, callback) {
    console.warn('\nCONTEXT UPDATE', newState)
    this.setState(newState, callback)
  },

  render() {
    return this.props.children
  }
})

module.exports = App
