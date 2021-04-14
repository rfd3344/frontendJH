import {
	STARWARS_GET_PEOPLE,
	STARWARS_LOADED_PEOPLE,
	STARWARS_GET_DETAILS,
	STARWARS_LOADED_DETAILS,
	STARWARS_LOADED_FAIL,
} from '_constants/actionTypes';

const initialState = {
	peopleList: [],
	pageNumber: 1,
	count: 0,
	personDetails: {},
	message: [],
	loading: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
	case STARWARS_GET_PEOPLE:
		return {
			...state,
			loading: true,
		};
	case STARWARS_LOADED_PEOPLE:
		return {
			...state,
			count: action.count,
			pageNumber: action.pageNumber,
			peopleList: [...action.peopleList],
			loading: false,
		};
	case STARWARS_GET_DETAILS:
		return {
			...state,
			loading: true,
		};
	case STARWARS_LOADED_DETAILS:
		return {
			...state,
			personDetails: action.personDetails,
			loading: false,
		};
	case STARWARS_LOADED_FAIL:
		return {
			...state,
			message: action.message,
			loading: false,
		};

	default: return state;
	}
}
