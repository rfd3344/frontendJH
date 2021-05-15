import { assert } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cleanup, render } from '@testing-library/react';

import Pagination from '_pages/StarWars/Pagination';
import PeopleList from '_pages/StarWars/PeopleList';
import PeopleListRow from '_pages/StarWars/PeopleListRow';
import PersonDetails from '_pages/StarWars/PersonDetails';
import { firstPageState } from '_tests/data/starWarsData';

describe('StarWars component', function () {
	let mockStore = null;
	beforeEach(function () {
		mockStore = configureStore([]);
	});

	afterEach(function () {
		mockStore = null;
		cleanup();
	});

	test('create Pagination', () => {
		const store = mockStore({ starWars: firstPageState });
		const { container } = render(
			<Provider store={store}>
				<Pagination />
			</Provider>,
		);
		const activeNode = container.querySelector('.MuiTablePagination-root .MuiTablePagination-caption');
		assert.strictEqual(activeNode.innerHTML, '1-10 of 82');
	});

	test('create PeopleList', () => {
		const store = mockStore({ starWars: firstPageState });
		const { container } = render(
			<Provider store={store}>
				<PeopleList />
			</Provider>,
		);
		const rowNodes = container.querySelectorAll('tbody tr');
		const columNodes = container.querySelectorAll('tbody tr:first-child td');
		assert.strictEqual(rowNodes.length, 2);
		assert.strictEqual(columNodes.length, 3);
	});


	test('create PeopleListRow', () => {
		const store = mockStore({ starWars: firstPageState });
		const personInfo = firstPageState.peopleList[0];
		const { container } = render(
			<Provider store={store}>
				<table>
					<tbody>
						<PeopleListRow
							name={personInfo.name}
							height={personInfo.height}
							mass={personInfo.mass}
							url={personInfo.url}
						/>
					</tbody>
				</table>
			</Provider>,
		);
		const activeNode = container.querySelectorAll('td');
		assert.strictEqual(activeNode.length, 3);
		assert.strictEqual(activeNode[0].innerHTML, 'Luke Skywalker');
		assert.strictEqual(activeNode[1].innerHTML, '172');
		assert.strictEqual(activeNode[2].innerHTML, '77');
	});


	test('create PersonDetails', () => {
		const store = mockStore({ starWars: firstPageState });
		const { container } = render(
			<Provider store={store}>
				<PersonDetails />
			</Provider>,
		);
		const pNode = container.querySelectorAll('.MuiBox-root p');
		assert.strictEqual(pNode.length, 5);
		assert.strictEqual(pNode[0].innerHTML, 'Name:Leia Organa');
		assert.strictEqual(pNode[1].innerHTML, 'Height:150');
		assert.strictEqual(pNode[2].innerHTML, 'Birth Year:19BBY');
		assert.strictEqual(pNode[3].innerHTML, 'Gender:female');
		assert.strictEqual(pNode[4].innerHTML, 'Films:A New Hope, The Empire Strikes Back, ');
	});
});
