import React from 'react';
import PropTypes from 'prop-types';
import './admin.less';
// import Topbar from './Admin_Topbar';
import Sidebar from './AdminSidebar';

function AdminTemplate(props) {
	const { children } = props;

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

AdminTemplate.propTypes = {
	children: PropTypes.element.isRequired,
};

export default AdminTemplate;
