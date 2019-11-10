import React from 'react';
import { connect } from 'react-redux';

import { filterTodo } from './Redux';

function TodosFilter() {
	return (
		<div>
			<input type="button" className="btn btn-info" onClick={() => filterTodo('all')} value="All" />
			<input type="button" className="btn btn-info" onClick={() => filterTodo('unfinished')} value="Unfinished" />
			<input type="button" className="btn btn-success" onClick={() => filterTodo('done')} value="done" />
		</div>
	);
}

const mapStateToProps = (state) => ({
	todosData: state.Todos.list,
});

const mapDispatchToProps = (dispatch) => ({
	filterTodo: (value) => dispatch(filterTodo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosFilter);
