/** @jsx React.DOM */
var React = require('react');

var MyName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    );
  },
});

module.exports = MyName;

