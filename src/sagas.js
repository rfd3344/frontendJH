import { fork, all } from 'redux-saga/effects';
import watchGetStarWars from './saga/starWars';

// root of saga
export default function* root() {
	yield all([
		fork(watchGetStarWars),
	]);
}
