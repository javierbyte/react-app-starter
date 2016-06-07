var React = require('react');

var Home = React.createClass({
  contextTypes: {
    contextState: React.PropTypes.object,
    updateContextState: React.PropTypes.func
  },

  componentWillMount() {
    const {updateContextState} = this.context

    updateContextState({
      test: 'Context updated!'
    })
  },

  render() {
    const {contextState} = this.context

    return (
      <div>
        <h1>Hello World - Home</h1>
        <div>
          {contextState.test}
        </div>
      </div>
    );
  }
});

module.exports = Home;
