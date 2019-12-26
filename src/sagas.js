import { fork, all } from 'redux-saga/effects';
import watchGetPhotos from './saga/photosSearch';

// root of saga
export default function* root() {
	yield all([
		fork(watchGetPhotos),
	]);
}
