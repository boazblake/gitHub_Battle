var React = require('react');
var transparentBg = require('../styles').transparentBg;

function MainContainer (props) {
	return (
		<div className='jumbotron col-sm-12 text-center' styles={transparentBg}>
			{props.children}
		</div>
	)

}


module.exports = MainContainer