//	All reducers
import { combineReducers } from 'redux';

import todos from '_reducers/todos';
import ProductFilter from '_views/Products/Redux';
import Quoridor from '_views/Quoridor/Redux';


// Action reducer Example
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	text,
});

const reducer1 = (state = [], action) => {
	switch (action.type) {
	case 'action1':
		return [
			...state,
			{ text: 'action1 text' },
		];
	default:
		return state;
	}
};


export default combineReducers({
	reducer1,
	todos,
	ProductFilter,
	Quoridor,
});
