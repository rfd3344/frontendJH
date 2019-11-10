import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from './Redux';

function TodosList({ todosData }) {
	return (
		<ul className="list-group">
			{todosData.map((item) =>
				<li key={item.id} className={item.completed ? 'list-group-item done': 'list-group-item unfinished'}
					onClick={() => toggleTodo(item.id)}>
					<i className="material-icons">{item.completed ? 'check_box': ''}</i> {item.text}
				</li>
			)}
		</ul>
	);
}
const Visiablefilter = (todosData) => {
	switch (todosData.filter) {
	case 'all':
		return todosData.list;
	case 'unfinished':
		return todosData.list.filter((t) => !t.completed);
	case 'done':
		return todosData.list.filter((t) => t.completed);
	default:
		throw new Error(`Unknown filter: ${todosData.filter}`);
	}
};
// store listenner
const mapStateToProps = (state) => ({
	todosData: Visiablefilter(state.Todos),
});

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (id) => dispatch(toggleTodo(id)),
});

TodosList.propTypes = {
	todosData: PropTypes.array, // diable-eslint-line
	toggleTodo: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
