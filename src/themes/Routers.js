import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StarWars from '_pages/StarWars';
import NotFound from '_pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={StarWars} />
		<Route exact path="/star-wars" component={StarWars} />

		<Route path="*" component={NotFound} />
	</Switch>
);
export default Routers;
