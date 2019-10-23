import React from 'react';

export default function Topbar() {
	return (
		<div id="Topbar">
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
				<a className="navbar-brand col-sm-3 col-md-2" href="#">Company name</a>
				<input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">Sign out</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
