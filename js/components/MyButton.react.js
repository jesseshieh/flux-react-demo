/** @jsx React.DOM */
var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MyButton = React.createClass({
  render: function() {
    return (
      <button onClick={this._onClick}>Click</button>
    );
  },

  _onClick: function() {
    AppDispatcher.handleViewAction({
      actionType: "increment",
      amount: 2
    });
  }
});

module.exports = MyButton;

