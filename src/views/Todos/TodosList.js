import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodosItem from './TodosItem';

function TodosList({ todosData }) {
	return (
		<ul className="list-group">
			{todosData.map((item) => (
				<TodosItem
					key={item.id}
					itemId={item.id}
					completed={item.completed}
					text={item.text}
				/>
			))}
		</ul>
	);
}
const visiablefilter = (todosData) => {
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
TodosList.propTypes = {
	todosData: PropTypes.arrayOf(),
};

const mapStateToProps = (state) => ({
	todosData: visiablefilter(state.todos),
});
export default connect(mapStateToProps)(TodosList);
