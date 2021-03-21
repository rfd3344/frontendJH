import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.less';

export default function Home() {
	return (
		<section id="home">
			<NavLink to="/"> Home </NavLink>
			<NavLink to="/material-ui"> MaterialUI </NavLink>

			<NavLink to="/admin/todos"> Todos </NavLink>
			<NavLink to="/admin/photos-search"> PhotoSearch </NavLink>
			<NavLink to="/admin/chart"> Chart </NavLink>
			<NavLink to="/admin/quoridor"> Quoridor </NavLink>
			<NavLink to="/admin/tools"> Tools </NavLink>
			<NavLink to="/admin/text-editor"> Text Editor </NavLink>

			<NavLink to="/test"> test </NavLink>

			<NavLink to="/saga-test"> saga test </NavLink>
		</section>
	);
}
