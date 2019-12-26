import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterTodo } from '_actions/todos';

function TodosFilter({ clickHandler }) {
	return (
		<div>
			<input type="button" className="btn btn-info" onClick={() => clickHandler('all')} value="All" />
			<input type="button" className="btn btn-info" onClick={clickHandler.bind(null, 'unfinished')} value="Unfinished" />
			<input type="button" className="btn btn-success" onClick={() => clickHandler('done')} value="done" />
		</div>
	);
}


TodosFilter.propTypes = {
	clickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	todosData: state.todos.list,
});

const mapDispatchToProps = (dispatch) => ({
	clickHandler: (value) => dispatch(filterTodo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosFilter);
