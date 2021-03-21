import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Auth Pages
import Login from '_pages/Login';

import Home from '_pages/Home';
import MaterialUI from '_pages/MaterialUI';
import Test from '_pages/Test';
import SagaTest from '_pages/SagaTest';

import Todos from '_pages/Todos/index';
import Products from '_pages/Products';
import PhotosSearch from '_pages/PhotosSearch';
import Chart from '_pages/Chart';
import Quoridor from '_pages/Quoridor';
import TextEditor from '_pages/TextEditor';
import Tools from '_pages/Tools';
import NotFound from '_pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/login" component={Login} />

		<Route exact path="/" component={Home} />
		<Route exact path="/material-ui" component={MaterialUI} />
		<Route exact path="/test" component={Test} />
		<Route exact path="/saga-test" component={SagaTest} />

		<Route exact path="/admin/todos" component={Todos} />
		<Route exact path="/admin/products" component={Products} />
		<Route exact path="/admin/photos-search" component={PhotosSearch} />
		<Route exact path="/admin/chart" component={Chart} />
		<Route exact path="/admin/quoridor" component={Quoridor} />
		<Route exact path="/admin/text-editor" component={TextEditor} />
		<Route exact path="/admin/tools" component={Tools} />
		<Route path="*" component={NotFound} />
	</Switch>
);
export default Routers;
