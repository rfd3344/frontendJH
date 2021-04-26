import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '_actions/todos';

function TodosItem({
	itemId, name, priority, completed,
	handleComplete, handleDelete,
}) {
	let itemClassName = completed ? 'completed ' : 'pending ';
	itemClassName += 'list-group-item TodosItem';

	return (
		<li className={itemClassName}>
			<span className="name">
				{name}
			</span>
			<span className={`${priority} priority`}>
				{priority}
			</span>
			<span className="actions">
				<input type="checkbox" checked={completed} onChange={handleComplete.bind(null, itemId)} />
				<i className="material-icons" onClick={handleDelete.bind(null, itemId)}>delete</i>
			</span>
		</li>
	);
}

const mapDispatchToProps = (dispatch) => ({
	handleComplete: (id) => dispatch(toggleTodo(id)),
	handleDelete: (id) => dispatch(deleteTodo(id)),
});

TodosItem.propTypes = {
	itemId: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	priority: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	handleComplete: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TodosItem);
