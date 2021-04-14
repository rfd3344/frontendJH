// import { assert } from 'chai';
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { cleanup, render } from '@testing-library/react';
//
// import TodosAddNew from '../../../src/pages/Todos/TodosAddNew';
// import TodosBadges from '../../../src/pages/Todos/TodosBadges';
// import TodosItem from '../../../src/pages/Todos/TodosItem';
// import TodosList from '../../../src/pages/Todos/TodosList';
// import { initialState } from '../../data/initialState';
//
// describe('todos component', function () {
// 	let mockStore = null;
// 	beforeEach(function () {
// 		mockStore = configureStore([]);
// 	});
//
// 	afterEach(function () {
// 		mockStore = null;
// 		cleanup();
// 	});
//
// 	it('should create TodosAddNew', () => {
// 		const store = mockStore(initialState);
// 		const { container } = render(
// 			<Provider store={store}>
// 				<TodosAddNew />
// 			</Provider>,
// 		);
// 		const activeNode = container.querySelector('.TodosAddNew');
// 		assert.exists(activeNode);
// 	});
//
// 	it('should create TodosBadges', () => {
// 		const store = mockStore(initialState);
// 		const { container } = render(
// 			<Provider store={store}>
// 				<TodosBadges />
// 			</Provider>,
// 		);
// 		const activeNode = container.querySelector('.TodosBadges');
// 		assert.exists(activeNode);
// 		const badgesNodes = container.querySelectorAll('.TodosBadges .badge');
// 		assert.strictEqual(badgesNodes.length, 2);
// 		assert.strictEqual(badgesNodes[0].innerHTML, 'Total:4');
// 		assert.strictEqual(badgesNodes[1].innerHTML, 'Completed:1');
// 	});
//
// 	it('should create TodosList', () => {
// 		const store = mockStore(initialState);
// 		const { container } = render(
// 			<Provider store={store}>
// 				<TodosList />
// 			</Provider>,
// 		);
// 		const activeNode = container.querySelector('.TodosList');
// 		assert.exists(activeNode);
// 		const todosItemNodes = container.querySelectorAll('.TodosList .TodosItem');
// 		assert.strictEqual(todosItemNodes.length, 4);
// 	});
//
// 	it('should create TodosItem', () => {
// 		const store = mockStore(initialState);
// 		const item = {
// 			id: '1',
// 			name: 'item1',
// 			priority: 'low',
// 			completed: false,
// 		};
// 		const { container } = render(
// 			<Provider store={store}>
// 				<TodosItem
// 					key={item.id}
// 					itemId={item.id}
// 					priority={item.priority}
// 					completed={item.completed}
// 					name={item.name}
// 				/>
// 			</Provider>,
// 		);
// 		const activeNode = container.querySelector('.TodosItem');
// 		assert.exists(activeNode);
// 		const nameNodes = container.querySelector('.TodosItem .name');
// 		assert.strictEqual(nameNodes.innerHTML, 'item1');
// 		const priorityNodes = container.querySelector('.TodosItem .priority');
// 		assert.strictEqual(priorityNodes.innerHTML, 'low');
// 	});
// });
