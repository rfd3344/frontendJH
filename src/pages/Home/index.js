import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Home() {
	return (
		<section>
			<NavLink to="/startwars">Startwars</NavLink><br/>
			<NavLink to="/histogram">Histogram</NavLink><br/>
			<NavLink to="/todos">todos</NavLink><br/>
			<NavLink to="/test">test</NavLink><br/>
		</section>
	);
}
