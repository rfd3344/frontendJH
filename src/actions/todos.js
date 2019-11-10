
let nextTodoId = 2;

export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text,
});
export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id,
});
export const filterTodo = (value) => ({
	type: 'FILTER_TODO',
	value,
});
