import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
	<footer>
		<div className="container">

			<NavLink to="/page11" className="nav-link">Page 11</NavLink>

			<NavLink to="/admin" className="nav-link">Go To Admin </NavLink>




		</div>
	</footer>
);
export default Footer;
