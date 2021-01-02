import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Auth Pages
import Login from '_views/Login';

// Front Pages
import Home from '_views/Home';
import MaterialUI from '_views/MaterialUI';

// Admin Pages
import Dashboard2 from '_views/Dashboard2';
import Todos from '_views/Todos/index.jsx';
import Products from '_views/Products';
import PhotosSearch from '_views/PhotosSearch';
import Waterfall from '_views/Waterfall';
import Chart from '_views/Chart';
import Quoridor from '_views/Quoridor';
import TextEditor from '_views/TextEditor';
import Tools from '_views/Tools';
import NotFound from '_views/NotFound';

const Routers = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/login" component={Login} />

			<Route exact path="/" component={Home} />
			<Route exact path="/material-ui" component={MaterialUI} />

			<Route exact path="/admin" component={Dashboard2} />
			<Route exact path="/admin/dashboard2" component={Dashboard2} />
			<Route exact path="/admin/todos" component={Todos} />
			<Route exact path="/admin/products" component={Products} />
			<Route exact path="/admin/photos-search" component={PhotosSearch} />
			<Route exact path="/admin/waterfall" component={Waterfall} />
			<Route exact path="/admin/chart" component={Chart} />
			<Route exact path="/admin/quoridor" component={Quoridor} />
			<Route exact path="/admin/text-editor" component={TextEditor} />
			<Route exact path="/admin/tools" component={Tools} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);
export default Routers;
