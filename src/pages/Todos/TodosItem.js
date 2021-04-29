import React, { useContext } from 'react';

import TodosContent, { toggleTodo, deleteTodo } from './context';

export default function TodosItem({ itemId, name, priority, completed }) {
	const {dispatch} = useContext(TodosContent);
	let itemClassName = completed ? 'completed ' : 'pending ';
	itemClassName += 'list-group-item TodosItem';

	const handleComplete = (e) => {
		dispatch(toggleTodo(itemId));
	}

	const handleDelete = (e) => {
		dispatch(deleteTodo(itemId));
	}

	return (
		<li className={itemClassName}>
			<span className="name">
				{name}
			</span>
			<span className={`${priority} priority`}>
				{priority}
			</span>
			<span className="actions">
				<input type="checkbox" checked={completed} onChange={handleComplete} />
				<i className="material-icons" onClick={handleDelete}>delete</i>
			</span>
		</li>
	);
}
