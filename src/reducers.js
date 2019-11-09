//	All reducers
import { combineReducers } from 'redux';

import Todos from 'views/Todos/Redux';
import ProductFilter from 'views/Products/Redux';
import Quoridor from 'views/Quoridor/Redux';


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
	Todos,
	ProductFilter,
	Quoridor,
});
