import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Home() {
	return (
		<section>
			<NavLink to="/starwars">Starwars</NavLink><br/>
			<NavLink to="/histogram">Histogram</NavLink><br/>
			<NavLink to="/todos">todos</NavLink><br/>
			<NavLink to="/animal-form">AnimalForm</NavLink><br/>

			<NavLink to="/websocket-echo">Websocket Echo</NavLink><br/>
			<NavLink to="/test">test</NavLink><br/>
		</section>
	);
}
