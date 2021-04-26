import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '_actions/todos';
import PriorityOptions from '_constants/PriorityOptions';

const TodosAddNew = ({ triggerAdd }) => {
	const [name, setName] = useState('');
	const [priority, setPriority] = useState('low');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handlePriorityChange = (e) => {
		setPriority(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		triggerAdd(name, priority);
	};
	return (
		<div className="TodosAddNew">
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="col-md-6 col-12 mb-3">
						<input type="text" className="form-control" required value={name} onChange={handleNameChange} />
					</div>
					<div className="col-md-4 col-8 mb-2">
						<select value={priority} onChange={handlePriorityChange} className="custom-select">
							<option value={PriorityOptions.LOW}>{PriorityOptions.LOW}</option>
							<option value={PriorityOptions.MEDIUM}>{PriorityOptions.MEDIUM}</option>
							<option value={PriorityOptions.HIGH}>{PriorityOptions.HIGH}</option>
						</select>
					</div>
					<div className="col-md-2 col-4 mb-1">
						<input type="submit" className="btn btn-info" value="Add" />
					</div>
				</div>
			</form>
		</div>
	);
};

TodosAddNew.propTypes = {
	triggerAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	triggerAdd: (name, priority) => dispatch(addTodo(name, priority)),
});


export default connect(null, mapDispatchToProps)(TodosAddNew);
