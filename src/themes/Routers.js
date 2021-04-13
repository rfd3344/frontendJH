import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Auth Pages
import MaterialUI from '_pages/MaterialUI';
import NotFound from '_pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={MaterialUI} />
		<Route exact path="/material-ui" component={MaterialUI} />

		<Route path="*" component={NotFound} />
	</Switch>
);
export default Routers;
