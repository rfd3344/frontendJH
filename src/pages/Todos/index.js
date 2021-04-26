import React from 'react';

import TodosBadges from './TodosBadges';
import TodosAddNew from './TodosAddNew';
import TodosList from './TodosList';
import './style.less';

export default function Todos() {
	return (
		<section className="Todos container">
			<div className="row justify-content-center">
				<div className="col-md-6 col-12 alert alert-info">
					<h1> Todos List </h1>
					<TodosAddNew />
					<TodosBadges />
					<TodosList />
				</div>
			</div>
		</section>
	);
}
