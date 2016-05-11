var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')

function Results (props) {
	console.log('props in results', props)
	return (
		<div className='jumbotron col-sm-12 text-center' styles={styles.transparentBg}>
			<h1>Results</h1>
			<div classname='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='winner'>
					<UserDetails score={props.scores[WW]} info={props.playersInfo[WW]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='loser'>
					<UserDetails score={props.scores[LL]} info={props.playersInfo[LL]} />
				</UserDetailsWrapper>
			</div>
		</div>
	)
}


Results.propTypes= {
	isLoading:PropTypes.bool.isRequired,
	playersInfo:PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results