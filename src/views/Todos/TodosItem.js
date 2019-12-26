/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '_actions/todos';

function TodosItem({ itemId, completed, text, toggleHandler }) {
	return (
		<>
			<li
				className={completed ? 'list-group-item done' : 'list-group-item unfinished'}
				onClick={toggleHandler.bind(null, itemId)}
				onKeyUp={toggleHandler.bind(null, itemId)}
			>
				<i className="material-icons">{completed ? 'check_box' : ''}</i>
				{text}
			</li>
		</>
	);
}

const mapDispatchToProps = (dispatch) => ({
	toggleHandler: (id) => 	dispatch(toggleTodo(id)),
});

TodosItem.propTypes = {
	itemId: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	toggleHandler: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TodosItem);
