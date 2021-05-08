import { WSECHO_SEND_MESSAGE, WSECHO_GET_RESPONSE } from '@/constants/actionTypes';
import {State, Action} from '@/schemas/websocketEcho';
const initialState: State  = {
	messages: [],
};

export default function reducer(state = initialState, action: Action) {
	switch (action.type) {
	case WSECHO_SEND_MESSAGE:
		return {
			...state,
			messages: [...state.messages, { type:'sent', text: action.message }],
		};
	case WSECHO_GET_RESPONSE:
		return {
			...state,
			messages: [...state.messages, { type:'received', text: action.message }],
		};
	default: return state;
	}
}
