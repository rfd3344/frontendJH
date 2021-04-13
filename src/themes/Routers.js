import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartWars from '_pages/StartWars';
import NotFound from '_pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={StartWars} />
		<Route exact path="/star-wars" component={StartWars} />

		<Route path="*" component={NotFound} />
	</Switch>
);
export default Routers;
