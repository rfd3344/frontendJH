/*********************	Action **************************/

export const addTodo = text => ({
	type: 'ADD_TODO',
	text
})




/*********************	Reducer ************************/

const Example = (state = [], action) => {
	switch (action.type) {
		case 'action1':
			return [
				...state,
				{ text: 'action1 text'}
			]
		default:
			return state
	}
}
export default Example
