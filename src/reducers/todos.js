
const initialState = {
	list: [
		{
			id: '1',
			name: 'item1',
			priority: 'low',
			completed: false,
		},
		{
			id: '2',
			name: 'item2',
			priority: 'high',
			completed: true,
		},
		{
			id: '3',
			name: 'item3',
			priority: 'low',
			completed: false,
		},
		{
			id: '4',
			name: 'item4',
			priority: 'medium',
			completed: false,
		},
	],
	totalNum: 4,
	completedNum: 1,
};

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

export default function todos(state = initialState, action) {
	switch (action.type) {
	case 'ADD_TODO':
		return handleAddTodo(state, action);
	case 'TOGGLE_TODO':
		return handleToggleTodo(state, action);
	case 'DELETE_TODO':
		return handleDeleteTodo(state, action);
	default: return state;
	}
}
