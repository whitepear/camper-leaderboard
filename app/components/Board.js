var React = require('react');
var PropTypes = React.PropTypes;
var key = 0;

function keyGen () {
	key++;
	return key;
}

function Board (props) {	
	if (props.isLoading) {
		return (
			<div>Loading...</div>
		)
	} else {		
		if (props.fetchResults.status >= 400) {
			return (
				<div>An error occurred. Please try again later.</div>
			)
		} else {
			return (
				<div className="temp-leaderboard">
					<div className="row text-center leader-title">
						<span className="leader-content">Leaderboard</span>
					</div>
					<div className="row header-row">
						<div className="col-xs-1 header-text"><span>#</span></div>						
						<div className="col-xs-4 col-sm-5 header-text">Camper Name</div>
						<div className="col-xs-3 header-text text-center" ><span onClick={props.onClickRequest} id="lastThirty"><span className="hidden-xs">Points in Past 30 Days</span><span className="visible-xs">Points (30 Days)</span></span></div>
						<div className="col-xs-3 header-text text-center"><span  onClick={props.onClickRequest} id="allTime">All-time Points</span></div>
					</div>
					{props.fetchResults.data.map(function (camper, index) {
						return <div className="row info-row" key={keyGen()}>
							<div className="col-xs-1">{index + 1}</div>
							<div className="col-xs-4 col-sm-5"><a className="camper-name-wrap" href={'https://www.freecodecamp.com/' + camper.username}><img src={camper.img} alt="Profile Image" className="user-img hidden-xs"/>{camper.username}</a></div>
							<div className="col-xs-3 text-center">{camper.recent}</div>
							<div className="col-xs-3 text-center">{camper.alltime}</div>	
						</div>
					})}
				</div>
			)
		}	// end 400 check	
	} // end isLoading check
} // end Board

Board.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onClickRequest: PropTypes.func.isRequired,
	fetchResults: PropTypes.object.isRequired
};

module.exports = Board;