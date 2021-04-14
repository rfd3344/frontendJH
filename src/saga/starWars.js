import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import actionTypes from '_constants/actionTypes';

import { STARWARS_API } from '_constants/starWars';
import { loadedSuccess, loadedFail } from '_actions/starWars';
import { formatQuaryData } from '_helper/starWarsHelper';


function* getPeopleList(action) {
	try {
		const params = {
			page: action.pageNumber,
		};
		const url = `${STARWARS_API}/people`;
		const queryData = yield axios(url, { params }).then((res) => {
			if (res.status < 200 && res.status > 299) {
				throw new Error(`status: ${res.status}`);
			}
			console.warn('rfd ',res)
			return res.data;
		});

		const formattedQueryData = formatQuaryData(queryData);
		yield put(loadedSuccess({
			...formattedQueryData,
			pageNumber: action.pageNumber,
		}));
	} catch (e) {
		yield put(loadedFail(e.message));
	}
}

export default function* watchGetStarWars() {
	yield takeLatest(actionTypes.STARWARS_SEARCH_PEOPEL, getPeopleList);
}
