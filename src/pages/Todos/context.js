import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './constants';

export const addTodo = (name, priority) => ({
	type: ADD_TODO,
	id: uuidv4(),
	name,
	priority,
});
export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id,
});
export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id,
});



// handle ADD_TODO action
const handleAddTodo = (state, action) => {
	const newList = [
		...state.list,
		{
			id: action.id,
			name: action.name,
			priority: action.priority,
			completed: false,
		},
	];
	return {
		...state,
		list: newList,
		totalNum: newList.length,
	};
};

// handle TOGGLE_TODO action
const handleToggleTodo = (state, action) => {
	const newList = state.list.map((item) => {
		if (item.id === action.id) {
			return {
				...item,
				completed: !item.completed,
			};
		}
		return item;
	});

	let completedNum = 0;
	newList.forEach((item) => {
		if (item.completed) completedNum++;
	});

	return {
		...state,
		list: newList,
		completedNum,
	};
};

// handle DELETE_TODO action
const handleDeleteTodo = (state, action) => {
	const newList = state.list.filter((item) => item.id !== action.id);
	const completedNum = newList.filter((item) => item.completed).length;
	return {
		...state,
		list: newList,
		totalNum: newList.length,
		completedNum,
	};
};

export function todosReducer(state = {}, action = {}) {
	switch (action.type) {
	case ADD_TODO:
		return handleAddTodo(state, action);
	case TOGGLE_TODO:
		return handleToggleTodo(state, action);
	case DELETE_TODO:
		return handleDeleteTodo(state, action);
	default: return state;
	}
}


const TodosContext = React.createContext({
	state: {},
	dispatch: React.DispatchWithoutAction
});
export default TodosContext;