import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './admin.less';
import Topbar from './Admin_Topbar';
import Sidebar from './Admin_Sidebar';

export default function AdminTemplate() {
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

					</main>
				</div>
			</div>
		</div>
	);
}
