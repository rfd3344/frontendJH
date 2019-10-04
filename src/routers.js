import React from 'react';
import { BrowserRouter as Router, Route,Switch, withRouter,Redirect } from 'react-router-dom';

import myvar from 'utilis/myvar';
import Test from 'views_admin/Test';
import Login from 'views_admin/Login';
import Admin from 'src/AdminLayout/Admin';

const Routers = () =>(
	<Router>
		<Switch>
			<Route exact path="/test" component={Test} />
			<Route exact path={myvar.admin_pre +'/login'} component={Login} />
			<PrivateRoute path='/' component={Admin} />
		</Switch>
	</Router>
)
export default Routers;

const Auth = {
	isAuthenticated: sessionStorage.token,
};
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			Auth.isAuthenticated ? ( <Component {...props} /> ) : (
				<Redirect to={{
					pathname: myvar.admin_pre+'/login',
					state: { from: props.location }	}}
				/>
			)
		}
	/>
);
