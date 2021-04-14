// import { assert } from 'chai';
// import {
// 	addTodo,
// 	toggleTodo,
// 	deleteTodo,
// } from '../../../src/actions/todos';
// import reducers from '../../../src/reducers/todos';
// import { initialState } from '../../data/initialState';
//
// const todosInitialState = initialState.todos;
//
// describe('todos reducer', function () {
// 	afterEach(function () {
// 		assert.deepEqual(todosInitialState, {
// 			list: [
// 				{
// 					id: '1',
// 					name: 'item1',
// 					priority: 'low',
// 					completed: false,
// 				},
// 				{
// 					id: '2',
// 					name: 'item2',
// 					priority: 'high',
// 					completed: true,
// 				},
// 				{
// 					id: '3',
// 					name: 'item3',
// 					priority: 'low',
// 					completed: false,
// 				},
// 				{
// 					id: '4',
// 					name: 'item4',
// 					priority: 'medium',
// 					completed: false,
// 				},
// 			],
// 			totalNum: 4,
// 			completedNum: 1,
// 		});
// 	});
// 	it('should return the initial state', () => {
// 		const res = reducers(undefined, {});
// 		assert.deepEqual(res, todosInitialState);
// 	});
//
// 	it('should get add new todo', () => {
// 		const res = reducers(todosInitialState, addTodo('testName', 'low'));
// 		assert.strictEqual(res.list.length, 5);
// 		assert.strictEqual(res.totalNum, 5);
// 		assert.strictEqual(res.completedNum, 1);
// 		assert.strictEqual(res.list[4].name, 'testName');
// 		assert.strictEqual(res.list[4].priority, 'low');
// 		assert.strictEqual(res.list[4].completed, false);
// 	});
//
// 	it('should change state to complete', () => {
// 		const res = reducers(todosInitialState, toggleTodo('1'));
// 		assert.strictEqual(res.list.length, 4);
// 		assert.strictEqual(res.list[0].completed, true);
// 		assert.strictEqual(res.completedNum, 2);
// 	});
//
// 	it('should delete the todo', () => {
// 		const res = reducers(todosInitialState, deleteTodo('1'));
// 		assert.strictEqual(res.list.length, 3);
// 		assert.deepEqual(res.totalNum, 3);
// 		assert.deepEqual(res.completedNum, 1);
// 	});
// });
