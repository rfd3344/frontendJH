
import { eventChannel } from 'redux-saga';
import {put, call, take, takeEvery} from 'redux-saga/effects';
import { wsEchoUrl } from '@/constants/websocketEcho';
import { WSECHO_SEND_MESSAGE, WSECHO_GET_RESPONSE } from '@/constants/actionTypes';
import { getResponse } from '@/actions/websocketEcho';
// import { Action } from '@/schemas/websocketEcho';

function* createEventChannel(mySocket) {
	return eventChannel(emit => {
		mySocket.onopen = (e => {
			emit({
				type: 'initial',
			});
		});

		mySocket.onmessage = (resp => emit({
			type: 'getMessage',
			message: resp.data,
		}));

		return () => {
			mySocket.close();
		};
	});
}

function* initializeWebSocketsChannel(action) {
	const mySocket = new WebSocket(wsEchoUrl);
	const channel = yield call(createEventChannel, mySocket);
	while (true) {
		const payload = yield take(channel);
		if(payload.type === 'initial') {
			mySocket.send(action.message);
		} else if(payload.type === 'getMessage') {
			yield put(getResponse(payload.message));
		}

	}
}

export default function* websocketEcho() {
	yield takeEvery(WSECHO_SEND_MESSAGE, initializeWebSocketsChannel);
}