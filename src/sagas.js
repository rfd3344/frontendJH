import { fork, all } from 'redux-saga/effects';
import watchGetPhotos from './saga/startWars';

// root of saga
export default function* root() {
	yield all([
		fork(watchGetPhotos),
	]);
}
