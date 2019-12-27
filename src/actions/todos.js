import ActionTypes from '_enums/ActionTypes';

let nextTodoId = 2;

export const addTodo = (text) => ({
	type: ActionTypes.ADD_TODO,
	id: nextTodoId++,
	text,
});
export const toggleTodo = (id) => ({
	type: ActionTypes.TOGGLE_TODO,
	id,
});
export const filterTodo = (value) => ({
	type: ActionTypes.FILTER_TODO,
	value,
});
