var React = require('react');
var PropTypes = React.PropTypes;
var space = require('../styles').space;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');


function ConfirmBattle( props ) {
	ConfirmBattle.PropTypes = {
		isLoading: PropTypes.bool.isRequired,
		playersInfo:PropTypes.array.isRequired,
		onInitiateBattle:PropTypes.func.isRequired
	}

	return props.isLoading === true
	? <Loading />
	: <MainContainer>
		<h1>CONFIRM PLAYERS</h1>
		<div className='col-sm-8 col-sm-offset-2'>
			<UserDetailsWrapper header='Player One'>
				<UserDetails info={props.playersInfo[0]} />
			</UserDetailsWrapper>
			<UserDetailsWrapper header='Player Two'>
				<UserDetails info={props.playersInfo[1]} />
			</UserDetailsWrapper>
		</div>

		<div className='col-sm-8 col-sm-offset-2'>
			<div className='col-sm-12' styles={space}>
				<button 
					className='btn btn-lg btn-success' 
					onClick={props.onInitiateBattle} >
					INITIATE BATTLE
				</button>
			</div>
			<div className='col-sm-12' styles={space} >
				<Link to='/playerOne'>
					<button 
						className='btn btn-lg btn-danger'>
						RESELECT PLAYERS
					</button>
				</Link>
			</div>
		</div>
	</MainContainer>
};

module.exports = ConfirmBattle;