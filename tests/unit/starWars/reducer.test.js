import { assert } from 'chai';
import {
	getPeopleList,
	loadedPeopleList,
	getPersonDetails,
	loadedPersonDetails,
	loadedFail,
} from '_actions/starWars';

import reducer from '_reducers/starWars';
import {
	initialState,
	loadedPeopleData,
	personDetailsUrl,
	personDetailsData
} from '_tests/data/starWarsData';

describe('todos reducer', function () {
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

	test('initial state', () => {
		const res = reducer(undefined, {});
		assert.deepEqual(res, initialState);
	});

	test('getPeopleList', () => {
		const res = reducer(initialState, getPeopleList(2));
		assert.strictEqual(res.loading, true);
		assert.strictEqual(res.pageNumber, 2);
	});

	test('loadedPeopleList', () => {
		const res = reducer(initialState, loadedPeopleList(loadedPeopleData));
		assert.strictEqual(res.loading, false);
		assert.strictEqual(res.pageNumber, 1);
		assert.strictEqual(res.count, 82);
		assert.strictEqual(res.peopleList.length, 1);
		assert.deepEqual(res.peopleList[0],  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      url: 'http://swapi.dev/api/people/1/'
    });
	});

	test('getPersonDetails', () => {
		const res = reducer(initialState, getPersonDetails(personDetailsUrl));
		assert.strictEqual(res.loading, true);
	});

	test('loadedPersonDetails', () => {
		const res = reducer(initialState, loadedPersonDetails(personDetailsData));
		assert.strictEqual(res.loading, false);
		assert.deepEqual(res.personDetails, {
	 		birth_year: '19BBY',
	 		films:  [
	 			{title: 'A New Hope'},
	 			{title: 'The Empire Strikes Back'}
	 		],
	 		gender: 'female',
	 		height: '150',
	 		name: 'Leia Organa',
	 	});
	});

	test('loadedFail', () => {
		const res = reducer(initialState, loadedFail('testFail'));
		assert.strictEqual(res.loading, false);
		assert.strictEqual(res.message, 'testFail');
	});

















});
