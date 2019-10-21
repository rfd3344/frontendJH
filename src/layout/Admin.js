import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './admin.less'
import Topbar from './Admin_Topbar.js'
import Sidebar from './Admin_Sidebar.js'

import Admin from 'views/Admin'
import Dashboard2 from 'views/Dashboard2'
import Todos from 'views/Todos'
import Products from 'views/Products'
import Waterfall from 'views/Waterfall'
import Chart from 'views/Chart'
import Quoridor from 'views/Quoridor'
import TextEditor from 'views/TextEditor'
import Tools from 'views/Tools'


export default class Admin_Template extends React.Component {
	render() {
		return (
			<div id="admin">
				{	// <Topbar />
				}
				<div className="container-fluid">
					<div className="row">
						<nav className="col-sm-2 sidebar">
							<Sidebar />
						</nav>
						<main className="col-sm-9 col-lg-10">
							<br />
							<Route exact path="/admin" component={Admin} />
							<Route path="/admin/dashboard2" component={Dashboard2} />
							<Route path="/admin/todos" component={Todos} />
							<Route path="/admin/products" component={Products} />
							<Route path="/admin/waterfall" component={Waterfall} />
							<Route path="/admin/chart" component={Chart} />
							<Route path="/admin/quoridor" component={Quoridor} />
							<Route path="/admin/text-editor" component={TextEditor} />
							<Route path="/admin/tools" component={Tools} />
						</main>
					</div>
				</div>
			</div>
		)
	}
}
