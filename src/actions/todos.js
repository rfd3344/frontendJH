import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
} from '@/constants/actionTypes';

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
