import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './views/Login/index';
import Template1 from './layout/Page';
// import Admin from './layout/Admin';

// const Routers = () => (
// 	<Router>
// 		<Switch>
// 		<Route path="/admin" component={Admin} />
// 		<Route path="/login" component={Login} />
// 		<Route path="/" component={Template1} />
// 		</Switch>
// 	</Router>
// );
const Routers = () => (
	<Router>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/" component={Template1} />
		</Switch>
	</Router>
);
export default Routers;
