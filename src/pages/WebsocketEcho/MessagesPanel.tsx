import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { MapState, Message, MessagesPanelC } from '@/schemas/websocketEcho';


function MessagesPanel({ messages }: MessagesPanelC) {

	return (
		<div>
			{
				messages.map((item: Message, index: number) => (
					<div key={index} >
						<span style={{color: item.type ==='sent' ? 'green': 'red'}} >
							{item.type}:
						</span>
						<span> {item.text} </span>
					</div>
				))
			}

		</div>
	);
};

const mapState = ({ websocketEcho }: MapState) => ({
	messages: websocketEcho.messages,
});

export default connect(mapState)(MessagesPanel);
