var React = require('react');
var PropTypes = React.PropTypes;

function Board (props) {
	return (
		<div className="col-xs-12">
			BOARD!
		</div>
	)
}

Board.propTypes = {
	isLoading: PropTypes.bool.isRequired
};

module.exports = Board;