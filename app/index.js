var React = require('react');
var ReactDOM = require('react-dom');

var UserData = {
	name: 'Boaz Blake',
	username: 'boazblake',
	image:'https://avatars0.githubusercontent.com/u/3834931?v=3&s=460',
}

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={this.props.imageUrl} style={{height:100, width:100}}/>
		)
	}
});

var ProfileName = React.createClass({
	render:function (){
		return (
			<div>
				<h2>{this.props.name}</h2>
			</div>	
		)
	}
});

var ProfileLink = React.createClass({
	render:function (){
		return (
			<div>
				<a href={'github.com/'+this.props.username}>
					<h1>{this.props.username}</h1>
				</a>
			</div>
		)
	}
});

var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
			)
	}
})

ReactDOM.render(<Avatar user={UserData} />, document.querySelector('#app'));