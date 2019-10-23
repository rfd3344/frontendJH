import React from 'react';

import './admin.less';
// import Topbar from './Admin_Topbar';
import Sidebar from './Admin_Sidebar';

export default function AdminTemplate() {
	const { children } = this.props;
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
						{children}
					</main>
				</div>
			</div>
		</div>
	);
}
