import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { STARWARS_GET_PEOPLE, STARWARS_GET_DETAILS } from '@/constants/actionTypes';
import { STARWARS_API } from '@/constants/starWars';
import { loadedPeopleList, loadedPersonDetails, loadedFail } from '@/actions/starWars';
import { pickPeopleList, pickPersonDetails, pickFilmNames } from '@/helper/starWarsHelper';
import { handleGetReponse } from '@/helper/axiosHelper';




function* getPeopleList(action) {
	try {
		const params = {
			page: action.pageNumber,
		};
		const url = `${STARWARS_API}/people`;
		const queryData = yield axios(url, { params }).then(handleGetReponse);
		const res = pickPeopleList(queryData);

		yield put(loadedPeopleList({
			...res,
			pageNumber: action.pageNumber,
		}));
	} catch (e) {
		yield put(loadedFail(e.message));
	}
}


function* getPersonDetails(action) {
	try {
		const personDetailsInfo = yield axios(action.url).then(handleGetReponse);
		const filmsUrl = personDetailsInfo.films || [];
		const queryList = filmsUrl.map((url) => axios(url));
		const filmsInfo = yield Promise.all(queryList).then((res) => res.map((film) => film.data));

		const personDetails = pickPersonDetails(personDetailsInfo);
		const filmNames = pickFilmNames(filmsInfo);
		yield put(loadedPersonDetails({
			...personDetails,
			films: [...filmNames],
		}));
	} catch (e) {
		yield put(loadedFail(e.message));
	}
}

export default function* watchStarWars() {
	yield takeLatest(STARWARS_GET_PEOPLE, getPeopleList);
	yield takeLatest(STARWARS_GET_DETAILS, getPersonDetails);
}
