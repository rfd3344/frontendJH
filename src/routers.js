import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Auth Pages
import Login from 'views/Login';

// Front Pages
import Home from 'views/Home';
import Page1 from 'views/Page1';

// Admin Pages
import Dashboard2 from 'views/Dashboard2';
import Todos from 'views/Todos';
import Products from 'views/Products';
import Waterfall from 'views/Waterfall';
import Chart from 'views/Chart';
import Quoridor from 'views/Quoridor';
import TextEditor from 'views/TextEditor';
import Tools from 'views/Tools';

const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={Login} />

			<Route exact path="/" component={Home} />
			<Route exact path="/page1" component={Page1} />

			<Route exact path="/admin" component={Dashboard2} />
			<Route exact path="/admin/dashboard2" component={Dashboard2} />
			<Route exact path="/admin/todos" component={Todos} />
			<Route exact path="/admin/products" component={Products} />
			<Route exact path="/admin/waterfall" component={Waterfall} />
			<Route exact path="/admin/chart" component={Chart} />
			<Route exact path="/admin/quoridor" component={Quoridor} />
			<Route exact path="/admin/text-editor" component={TextEditor} />
			<Route exact path="/admin/tools" component={Tools} />
		</Switch>
	</Router>
);
export default Routers;
