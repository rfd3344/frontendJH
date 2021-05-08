import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '@/actions/websocketEcho';
import { InputFormC } from '@/schemas/websocketEcho';

function InputForm({ dispatch }: InputFormC) {
	const inputEl = useRef(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const message = inputEl.current.value;
		inputEl.current.value = '';
		dispatch(sendMessage(message));
	};

	return (
		<div>
			<form onSubmit={handleSubmit} >
				<input ref={inputEl} />
				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default connect()(InputForm);
