import { logger } from 'utilis/logger';

// Action
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

// Reducer
const InitialState = {
	list: [
		{ id: 0, text: 1111, completed: true },
		{ id: 1, text: 2222, completed: false },
	],
	filter: 'all',
};

const Todos = (state = InitialState, action) => {
	logger.log(`action: ${action.type}`);
	switch (action.type) {
	case 'ADD_TODO':
		return {
			...state,
			list: [
				...state.list,
				{
					id: action.id,
					text: action.text,
					completed: false,
				},
			],
		};
	case 'TOGGLE_TODO':
		return {
			...state,
			list: state.list.map((item) => {
				if (item.id === action.id) return { ...item, completed: !item.completed };
				return item;
			}),
		};
	case 'FILTER_TODO':
		return {
			...state,
			filter: action.value,
		};
	default: return state;
	}
};

export default Todos;
