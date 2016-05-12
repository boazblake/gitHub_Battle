var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading')


Results.PropTypes= {
	isLoading:PropTypes.bool.isRequired,
	playersInfo:PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

function Results (props) {
	console.log(props)
	if (!props.isLoading) return (<Loading speed={500} text={'dueling'}/>)
}

function StartOver (){
	return (
		<div className='col-sm-12' style={styles.space}>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-danger'>Start Over</button>
			</Link>
		</div>
	)
}

function Tie (props) {

	console.log('Tie function was called', props)
	console.log('props.scores[0]>>>>>', props.scores[0])
	console.log('props.scores[1]>>>>>>>', props.scores[1])

	if (props.scores[0] || props.scores[0] === 0) {
		if (props.scores[0] === props.scores[1]) {
			return (
				<MainContainer>
					<h1>Its a Tie!</h1>
					<StartOver />
				</MainContainer>
			)
		}
	}


	var winningIndex = props.scores[0] > props.scores[1] ? 0: 1;
	var losingIndex = winningIndex === 0 ? 1: 0;
	return (
		<MainContainer>
			<h1>Results</h1>
			<div classname='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='winner'>
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='loser'>
					<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</MainContainer>
	)
}

module.exports = Results
