var axios = require('axios');

var id = 'you_client_id';
var sec = 'you_sercet_id';
var param = '' //?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
	getPlayersInfo: function(players){
		return axios.all( players.map( function( username ) {
			return getUserInfo(username)
		})).then(
			function(info) {
				return info.map(function( user ){
					return user.data
				})
		}).catch(function(err){
			console.warn('err with players info', err)
		})
	}
};

module.exports = helpers;