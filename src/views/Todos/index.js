import React from 'react';

import AdminTemplate from 'layout/AdminTemplate';

import Input from './Input';
import List from './List';
import Filter from './Filter';

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
