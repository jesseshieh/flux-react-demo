/** @jsx React.DOM */

var React = require('react');

var CommandCenter = require('./components/CommandCenter.react');

React.renderComponent(
  <CommandCenter />,
  document.getElementById('command_center')
);
