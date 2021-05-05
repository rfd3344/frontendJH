import React, { useContext } from 'react';
import { TodosItem } from '@/schemas/todos';
import TodosContent, { toggleTodo, deleteTodo } from './context';

export default function TodosItem({ id, name, priority, completed }: TodosItem) {
	const {dispatch} = useContext(TodosContent);
	let itemClassName = completed ? 'completed ' : 'pending ';
	itemClassName += 'list-group-item TodosItem';

	const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(toggleTodo(id));
	}

	const handleDelete = () => {
		dispatch(deleteTodo(id));
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
