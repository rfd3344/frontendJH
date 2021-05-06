import React from 'react';
import { State, Action } from '@/schemas/todos';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '@/constants/todos';

export const addTodo = (name: string, priority: string) => ({
	type: ADD_TODO,
	id: uuidv4(),
	name,
	priority,
});
export const toggleTodo = (id: string) => ({
	type: TOGGLE_TODO,
	id,
});
export const deleteTodo = (id: string) => ({
	type: DELETE_TODO,
	id,
});

// handle ADD_TODO action
const handleAddTodo = (state: State, action: Action) => {
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
const handleToggleTodo = (state: State, action: Action) => {
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
const handleDeleteTodo = (state: State, action: Action) => {
	const newList = state.list.filter((item) => item.id !== action.id);
	const completedNum = newList.filter((item) => item.completed).length;
	return {
		...state,
		list: newList,
		totalNum: newList.length,
		completedNum,
	};
};

export function todosReducer(state: State, action: Action) {
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


const TodosContext = React.createContext<{
	state: State;
	dispatch: React.Dispatch<any>;
}>({
	state: {},
	dispatch: () => null
});

export default TodosContext;