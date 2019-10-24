import React from 'react'

import Input from './Input';
import List from './List';
import Filter from './Filter';

const Todos = () => (
	<div id="Todos" className="container">
		<div className="row justify-content-center">
			<div className="col-6	alert alert-info">
				<h1> Todos List </h1>
				<Input />
				<List />
				<Filter />
			</div>
		</div>
	</div>
)

export default Todos
