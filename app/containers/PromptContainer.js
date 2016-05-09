var React = require('react');

var transparentBg = require('../styles').transparentBg

var Prompt = require('../components/prompts')

var PromptContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState:function() {
		return {
			username:''
		}
	},

	_handledateUserName: function(evt){
		this.setState({
			username: evt.target.value
		})
	},

	_handleSubmitUser:function(evt){
		evt.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});
		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne:	this.props.routeParams.playerOne,
					playerTwo:	this.state.username
				}
			})
			console.log(this.context)
		} else {
			this.context.router.push('/playerTwo/' + this.state.username)
		}
	},



	render:function (){
		return  (
			<Prompt 
			_onSubmitUser={this._handleSubmitUser}
			_onUpdateUser={this._handledateUserName}
			header={this.props.route.header}
			username={this.state.username} />
		)
	}
});

module.exports = PromptContainer