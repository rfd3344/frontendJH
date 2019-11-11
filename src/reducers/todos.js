import { logger } from '_utilis/logger';

const initialState = {
	list: [
		{ id: 0, text: '1111', completed: true },
		{ id: 1, text: '2222', completed: false },
	],
	filter: 'all',
};


export default function todos(state = initialState, action) {
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
}
