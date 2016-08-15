var React = require('react');
var campFetcher = require('../utils/campFetcher.js');
var Board = require('../components/Board.js');

var BoardContainer = React.createClass({
	getInitialState: function () {
		return {
			isLoading: true,
			fetchResults: {}
		}
	},
	componentDidMount: function () {
		campFetcher('lastThirty')
		.then(function (response) {
			this.setState({
				isLoading: false,
				fetchResults: response
			});			
		}.bind(this));
	},
	handleClickRequest: function (e) {
		campFetcher(e.target.id)
		.then(function (response) {
			this.setState({
				isLoading: false,
				fetchResults: response
			});			
		}.bind(this));
	},
	render: function () {
		return (
			<div className="container">				
				<Board 
					isLoading={this.state.isLoading} 
					fetchResults={this.state.fetchResults} 
					onClickRequest={this.handleClickRequest} />
			</div>
		)
	}
});

module.exports = BoardContainer;