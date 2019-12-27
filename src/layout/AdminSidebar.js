/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div id="Sidebar">
			<ul className="nav flex-column">
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin"
					exact activeClassName="active">
					Admin </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/dashboard2"
					activeClassName="active">
					Dashboard2 </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/todos"
					activeClassName="active">
					Todos </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/products"
					activeClassName="active">
					Products </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/photos-search"
					activeClassName="active">
					PhotoSearch </NavLink>
				</li>

				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/waterfall"
					activeClassName="active">
					Waterfall </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/chart"
					activeClassName="active"> Chart </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/quoridor"
					activeClassName="active">
					Quoridor </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/text-editor"
					activeClassName="active">
					Text Editor </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin/tools"
					activeClassName="active">
					Tools </NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/"
					exact activeClassName="active">
					Back to Home page </NavLink>
				</li>
			</ul>
		</div>
	);
}
