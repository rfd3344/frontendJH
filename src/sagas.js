import { fork, all } from 'redux-saga/effects';
import watchStarWars from '@/saga/starWars';
import websocketEcho from '@/saga/websocketEcho';


// root of saga
export default function* root() {
	yield all([
		fork(watchStarWars),
		fork(websocketEcho),
	]);
}
