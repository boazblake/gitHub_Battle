var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState:function() {
		console.log('get inital state')
		return {
			isLoading:true,
			playersinfo:[]
		}
	},

	componentWillMount:function(){
		console.log('compomnent will mount')
	},

	componentDidMount:function() {
		var component = this;
		console.log('compomnent did mount')
		var query = component.props.location.query;
		console.log('query test>>>>>>', query)
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
			console.log('PLAYERS', players)
			component.setState({
				isLoading:false,
				playersInfo:[ players[0], players[1] ]
			})
		})
	},

	componentWillReceiveProps:function(){
		console.log('component Will Receive Props')
	},

	componentWillUnmount:function(){
		console.log('component Will Unmount')
	},

	_handleInititateBattle: function(){
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo:this.state.playersInfo
			}
		})
	},

	render:function() {
		return (
			<ConfirmBattle
			isLoading ={this.state.isLoading}
			onInitiateBattle = {this._handleInititateBattle}
			playersInfo ={this.state.playersInfo}
			/>
		);
	}
});

module.exports = ConfirmBattleContainer;