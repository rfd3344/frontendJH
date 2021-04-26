import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortTodosList } from '_helper/todosHelper';
import TodosColumn from '_constants/TodosColumn';
import TodosItem from './TodosItem';

function TodosList({ todosData }) {
	const [sortBy, setSortBy] = useState(TodosColumn.NAME);

	const handleNameClick = () => {
		setSortBy(TodosColumn.NAME);
	};
	const handlePriorityClick = () => {
		setSortBy(TodosColumn.PRIORITY);
	};
	const sortedList = sortTodosList(todosData, sortBy);

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
					itemId={item.id}
					priority={item.priority}
					completed={item.completed}
					name={item.name}
				/>
			))}
		</ul>
	);
}

TodosList.propTypes = {
	todosData: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			priority: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}),
	).isRequired,
};

const mapStateToProps = (state) => ({
	todosData: state.todos.list,
});
export default connect(mapStateToProps)(TodosList);
