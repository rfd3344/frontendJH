/*********************	Action *****************/
let nextTodoId = 2
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})
export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})
export const filterTodo = (value) => ({
	type: 'FILTER_TODO',
	value
})
/*********************	Reducer *****************/
let InitialState = {
	list:[{id: 0,text: 1111,completed: true},
			{id: 1,text: 2222,completed: false} ],
	filter:'All'
}

const Todos = (state = InitialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return { ...state,
				list:[ ...state.list,
					{ id: action.id,
						text: action.text,
						completed: false }
				]
			}
		case 'TOGGLE_TODO':
			return { ...state,
				list: state.list.map(item =>
					(item.id === action.id)
						? {...item, completed: !item.completed} : item
				)
			}
		case 'FILTER_TODO':
			return { ...state,
				filter: action.value
			}
		default: return state
	}
}

export default Todos
