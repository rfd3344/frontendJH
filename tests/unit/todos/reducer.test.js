import { assert } from 'chai';
import {
	getPeopleList,
	loadedPeopleList,
	getPersonDetails,
	loadedPersonDetails,
	loadedFail,
} from '_actions/starWars';

import reducer from '_reducers/starWarsData';
import { initialState } from '_test/data/starWarsData';
//
// const todosInitialState = initialState.todos;

describe.only('todos reducer', function () {
	afterEach(function () {
		assert.deepEqual(initialState, {
			peopleList: [],
			pageNumber: 1,
			count: 0,
			personDetails: {},
			message: [],
			loading: false,
		});
	});
	test.only('should return the initial state', () => {
		const res = reducer(undefined, {});
		assert.deepEqual(res, initialState);
	});
});
