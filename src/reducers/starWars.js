import actionTypes from '_constants/actionTypes';

const initialState = {
	peopleList: [],
	pageNumber: 1,
	count: 0,
	personDetails: {},
	errors: [],
};

// handle CHANGE_PAGE action
const handleLoadedSuccess = (state, action) => {
	// console.warn('rfd state', state, action)
	// return {
	// 	...state,
	// 	count: action.count,
	// 	pageNumber: action.pageNumber,
	// 	peopleList: [...action.peopleList],
	// };
	// if (action.pageNumber * state.pickedQuantity > state.photosList.length) {
	// 	// page numbers exceeds the max expected number
	// 	// this should not happens in UI laylout,
	// 	// but if happens, the state will be initialized
	// 	return initialState;
	// }

	// return {
	// 	...state,
	// 	currentPage: action.pageNumber,
	// 	shownPhotos: state.photosList.slice(startIndex, endedIndex),
	// };
};

export default function photosSearch(state = initialState, action) {
	switch (action.type) {
	case actionTypes.STARWARS_LOADED_SUCCESS:
		return {
			...state,
			count: action.count,
			pageNumber: action.pageNumber,
			peopleList: [...action.peopleList],
		};
	case actionTypes.STARWARS_LOADED_FAIL:
		return {
			...state,
			message: action.message,
		};
	case actionTypes.STARWARS_PERSON_DETAILS:
		return {};
	default: return state;
	}
}
