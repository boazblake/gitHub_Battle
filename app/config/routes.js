var React = require('react');
var {Router, Route, hashHistory, IndexRoute} = require('react-router');

var Main = require('../components/Main');
var Home = require('../components/Home');

var Routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
);


module.exports = Routes;