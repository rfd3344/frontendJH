import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '_pages/Home';
import StarWars from '_pages/StarWars';
import Histogram from '_pages/Histogram';
import Todos from '_pages/Todos';
import NotFound from '_pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/starwars" component={StarWars} />
		<Route exact path="/histogram" component={Histogram} />
		<Route exact path="/todos" component={Todos} />

		<Route path="*" component={NotFound} />
	</Switch>
);

export default Routers;
