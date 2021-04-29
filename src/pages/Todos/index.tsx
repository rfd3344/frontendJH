import React, { useReducer } from 'react';
import TodosContext, { todosReducer } from './context';
import { INITIAL_STATE} from './constants';
import TodosBadges from './TodosBadges';
import TodosAddNew from './TodosAddNew';
import TodosList from './TodosList';
// import './style.css';

export default function Todos() {
	const [state, dispatch] = useReducer(todosReducer, INITIAL_STATE);

	return (
		<section className="Todos container">
			<TodosContext.Provider value={{state, dispatch}} >
				<div className="row justify-content-center">
					<div className="col-md-6 col-12 alert alert-info">
						<h1> Todos List </h1>
						<TodosAddNew />
						<TodosBadges />
						<TodosList />
					</div>
				</div>
			</TodosContext.Provider>
		</section>
	);
}
