var React = require('react');
var campFetcher = require('../utils/campFetcher.js');
var Board = require('../components/Board.js');

var BoardContainer = React.createClass({
	getInitialState: function () {
		return {
			isLoading: true,
			// allTime
			// lastThirty
		}
	},
	componentDidMount: function () {
		// campFetcherCall
	},
	// MAY NEED FUNCTION(S) FOR HANDLING INFO SWITCHING CLICK ON <BOARD />
	render: function () {
		return (
			<div className="row">				
				<Board isLoading={this.state.isLoading} allTime={this.state.allTime} lastThirty={this.state.lastThirty} />
			</div>
		)
	}
});

module.exports = BoardContainer;