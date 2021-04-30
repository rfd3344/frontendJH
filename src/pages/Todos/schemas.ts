

export interface TodosItem {
	id: string,
	name: string,
	priority: string,
	completed?: boolean,
}



export interface State {
	list ?: TodosItem[],
	totalNum ?: number,
	completedNum ?: number,
}




export interface Action {
	type: string,
	id ?: string,
	name ?: string,
	priority ?: string,
}
