import React, { useReducer } from 'react';
import InputForm from './InputForm';
import MessagesPanel from './MessagesPanel';

function WebsocketEcho() {

	return (
		<section>
			<h1> Websocket Echo test</h1>
			<InputForm />
			<MessagesPanel />
		</section>
	);
};

export default WebsocketEcho;
