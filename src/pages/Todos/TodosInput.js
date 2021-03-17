import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '_actions/todos';


const TodosInput = ({ triggerAdd }) => {
	const textInput = React.createRef();
	const clickHandler = (e) => {
		e.preventDefault();
		const inputValue = textInput.current.value.trim();
		if (!inputValue) return;
		triggerAdd(inputValue);
		textInput.current.value = '';
	};

	return (
		<div>
			<div className="input-group mb-3">
				<input type="text" className="form-control" ref={textInput} />
				<input type="button" className="btn btn-primary" onClick={clickHandler} value="Add To List" />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	triggerAdd: (value) => dispatch(addTodo(value)),
});

TodosInput.propTypes = {
	triggerAdd: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TodosInput);
