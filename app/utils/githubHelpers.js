var axios = require('axios');

var id = 'you_client_id';
var sec = 'you_sercet_id';
var param = '' //?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username){
	return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
	//fetch username repos
},

function getTotalStars (username) {
	//calculate  stars
},

function getPlayersData (username) {
	// return object with stars and username repos
},

function calculateScores (username) {
	//return array after fancy algotrrithns
},

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
	},
	battle: function(players){

	}
};

module.exports = helpers;