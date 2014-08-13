/** @jsx React.DOM */
var React = require('react');
var MyButton = require('./MyButton.react');
var MyName = require('./MyName.react');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CommandCenter = React.createClass({
  data: {
    count: 0
  },

  getInitialState: function() {
    return this.data;
  },

  componentDidMount: function() {
    AppDispatcher.register(function(payload) {
      this.data.count += 1;
      this.setState(this.data); // This re-renders the entire app.
      return true;
    }.bind(this));
  },

  render: function() {
  	return (
      <div>
        <MyName name={this.state.count}/>
        <MyButton />
      </div>
  	);
  }
});

module.exports = CommandCenter;
