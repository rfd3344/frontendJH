
export interface State {
	peopleList: Person[],
	pageNumber: number,
	personDetails: PersonDetails,
	count: number,
	message: string,
	loading: boolean,
}

export interface Action {
	type: string,
	peopleList ?: Person[],
	pageNumber ?: number,
	personDetails ?: PersonDetails,
	count ?: number,
	maxYAxis ?: number,
	message ?: string,
	loading ?: boolean,
}

export interface Person {
	name: string,
	height: string,
	mass: string,
	url: string,
}

export interface PersonDetails {
	name?: string,
	height?: string,
	birth_year?: string,
	gender?: string,
	url ?: string,
	films?: Films[],
}

export interface Films {
	title: string
}


export interface MapState {
	starWars: State,
}

export type Pagination = {
	count: number,
	pageNumber: number,
	handleChangePage: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNumber:number) => void
}

export type PeopleList = {
	peopleList: Person[],
	initialPage: (pageNumber: number) => void,
	loading: boolean,
}

export type PeopleListRow = Person & {
	handleClick: (url: string) => void,
}


export type PersonDetailsComp = {
	personDetails: PersonDetails,
}