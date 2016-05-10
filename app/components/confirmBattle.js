var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle( props ) {
	console.log('props', props)
	return props.isLoading === true
	? <p> LOADING ! </p>
	: <div className='jumbotron col-sm-12 text-center' styles={styles.transparentBg}> 
		<h1>CONFIRM PLAYERS</h1>
		<div className='col-sm-8 col-sm-offset-2'>
			<div className='col-sm-6'
		</div>
	</div> 
};












ConfirmBattle.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo:PropTypes.array.isRequired,
	onInitiateBattle:PropTypes.func.isRequired
}


module.exports = ConfirmBattle;