var React = require('react');
var ReactDOM = require('react-dom');
var BoardContainer = require('./containers/BoardContainer.js');
require('./styles/app.scss');

ReactDOM.render( <BoardContainer />, document.getElementById('app'));