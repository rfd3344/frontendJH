import React, { useContext, useState } from 'react';
import TodosContext from './context';
import { sortTodosList } from './utilis';
import { TodosColumn } from './constants';
import TodosItem from './TodosItem';
import { TodosItem as ItemType } from '@/schemas/todos';


export default function TodosList() {
	const [sortBy, setSortBy] = useState(TodosColumn.NAME);
	const { state } = useContext(TodosContext);
	const todosData: ItemType[] = state.list;
	const handleNameClick = () => {
		setSortBy(TodosColumn.NAME);
	};
	const handlePriorityClick = () => {
		setSortBy(TodosColumn.PRIORITY);
	};
	const sortedList: ItemType[] = sortTodosList(todosData, sortBy);

	return (
		<ul className="TodosList list-group">
			<li className="list-group-item header">
				<span className="name" onClick={handleNameClick}>
					{TodosColumn.NAME}
				</span>
				<span className="priority" onClick={handlePriorityClick}>
					{TodosColumn.PRIORITY}
				</span>
				<span className="actions">
					{TodosColumn.ACTIONS}
				</span>
			</li>
			{sortedList.map((item) => (
				<TodosItem
					key={item.id}
					id={item.id}
					priority={item.priority}
					completed={item.completed}
					name={item.name}
				/>
			))}
		</ul>
	);
}
