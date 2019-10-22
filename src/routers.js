import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Admin from 'views/Admin';
import Dashboard2 from 'views/Dashboard2';
import Todos from 'views/Todos';
import Products from 'views/Products';
import Waterfall from 'views/Waterfall';
import Chart from 'views/Chart';
import Quoridor from 'views/Quoridor';
import TextEditor from 'views/TextEditor';
import Tools from 'views/Tools';
import Login from './views/Login/index';
import Template1 from './layout/Page';

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
			<Route exact path="/" component={Template1} />

			<Route exact path="/admin" component={Admin} />
			<Route path="/admin/dashboard2" component={Dashboard2} />
			<Route path="/admin/todos" component={Todos} />
			<Route path="/admin/products" component={Products} />
			<Route path="/admin/waterfall" component={Waterfall} />
			<Route path="/admin/chart" component={Chart} />
			<Route path="/admin/quoridor" component={Quoridor} />
			<Route path="/admin/text-editor" component={TextEditor} />
			<Route path="/admin/tools" component={Tools} />
		</Switch>
	</Router>
);
export default Routers;
