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

var Link = React.createClass({
	changeURL: function(){
		location.replace(this.props.href)
	},

	render: function(){
		return (
			<span 
				style={{cursor:'pointer'}}
				onClick={this.changeURL}>
				{this.props.children}
			</span>
		)
	}

});

var ProfileLink = React.createClass({
	render:function (){
		return (
			<Link>
				<a href={'https://github.com/'+this.props.username}>
					<h2>{this.props.username}</h2>
				</a>
			</Link>
		)
	}
});

var ProfileName = React.createClass({
	render:function (){
		return (
			<div>
				<h3>{this.props.name}</h3>
			</div>	
		)
	}
});

var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileLink username={this.props.user.username}/>
				<ProfileName name={this.props.user.name}/>
			</div>
			)
	}
})

ReactDOM.render(<Avatar user={UserData} />, document.querySelector('#app'));