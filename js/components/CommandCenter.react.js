/** @jsx React.DOM */
var React = require('react');
var MyButton = require('./MyButton.react');
var MyName = require('./MyName.react');
var IncrementAction = require('../actions/IncrementAction');
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
      switch (payload.action.actionType) {
        case "increment":
          var incrementAmount = payload.action.amount;
          var action = new IncrementAction(incrementAmount);
          this.data = action.perform(this.data);
          break;
      }
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
