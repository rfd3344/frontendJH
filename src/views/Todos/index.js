import React from 'react';

import AdminTemplate from 'layout/AdminTemplate';

import AdminTemplate from 'layout/AdminTemplate';
import Input from './Input';
import List from './List';
import Filter from './Filter';

<<<<<<< HEAD
const Todos = () => (
	<AdminTemplate>
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
	</AdminTemplate>
)

export default Todos
=======
export default function Todos() {
	return (
		<AdminTemplate>
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
		</AdminTemplate>
	);
}
>>>>>>> f786ddcb47818ffbebf72b6a1330128a8e424f80
