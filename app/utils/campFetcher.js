var axios = require('axios');

function campFetcher (timePeriod) {
	if (timePeriod === 'lastThirty') {
		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then(function (response) {
				return response;
			})
			.catch(function (error) {
				console.log('A lastThirty error occurred: ', error);
			});
	} else if (timePeriod === 'allTime') {
		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then(function (response) {
				return response;
			})
			.catch(function (error) {
				console.log('An allTime error occurred: ', error);
			});
	}	
}

module.exports = campFetcher;