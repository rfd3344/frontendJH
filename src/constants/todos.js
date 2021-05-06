
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';


export const INITIAL_STATE = {
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
		}
	],
	totalNum: 4,
	completedNum: 1,
};


export const TodosColumn = {
	NAME: 'name',
	PRIORITY: 'priority',
	ACTIONS: 'actions',
};

export const PriorityOptions = {
	LOW: 'low',
	MEDIUM: 'medium',
	HIGH: 'high',
};