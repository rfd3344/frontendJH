import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from './Redux';


const AddForm = ({ dispatch }) => {
	console.warn('dispatch', dispatch );
	const textInput = React.createRef();
	const clickHandler = (e) => {
		e.preventDefault();
		const inputValue = textInput.current.value.trim();
		if (!inputValue) return;
		dispatch(addTodo(inputValue));
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

AddForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default connect()(AddForm);
