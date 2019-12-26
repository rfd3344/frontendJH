
const initialState = {
	searchText: '',
	photosList: [],
	shownPhotos: [],
	pickedQuantity: 2,
	currentPage: 0,
	totalPage: 0,
};

// handle PICK_QUANTITY action
const doPickQuantity = (state, action) => {
	// recaculate the total number of pages
	const totalPage = Math.floor(state.photosList.length / action.quantity);
	let { currentPage } = state;
	// currentPage will be set to max page number when current page is exceeded the total number of pages
	if (currentPage > totalPage) {
		currentPage = totalPage;
	}
	// calculate the index should be displayed, ie. startIndex and endedIndex
	const startIndex = (currentPage - 1) * action.quantity;
	let endedIndex = startIndex + action.quantity;
	if (endedIndex > state.photosList.length) {
		endedIndex = state.photosList.length;
	}
	return {
		...state,
		currentPage,
		totalPage,
		pickedQuantity: action.quantity,
		shownPhotos: state.photosList.slice(startIndex, endedIndex),
	};
};

// handle CHANGE_PAGE action
const doChangePage = (state, action) => {
	if (action.pageNumber * state.pickedQuantity > state.photosList.length) {
		// page numbers exceeds the max expected number
		// this should not happens in UI laylout,
		// but if happens, the state will be initialized
		return initialState;
	}
	const startIndex = (action.pageNumber - 1) * state.pickedQuantity;
	const endedIndex = action.pageNumber * state.pickedQuantity;
	return {
		...state,
		currentPage: action.pageNumber,
		shownPhotos: state.photosList.slice(startIndex, endedIndex),
	};
};

export default function photosSearch(state = initialState, action) {
	switch (action.type) {
	case 'SEARCH_TEXT':
		return {
			...state,
			searchText: action.text,
		};
	case 'LOADED_SUCCESS':
		return {
			...state,
			currentPage: 1,
			photosList: action.photosList,
			shownPhotos: action.photosList.slice(0, state.pickedQuantity),
			totalPage: Math.floor(action.photosList.length / state.pickedQuantity),
		};
	case 'LOADED_FAIL':
		return {
			...state,
			message: action.message,
		};
	case 'PICK_QUANTITY':
		return doPickQuantity(state, action);
	case 'CHANGE_PAGE':
		return doChangePage(state, action);
	case 'CANCEL_SEARCH':
		return {
			...state,
			searchText: '',
			photosList: [],
			shownPhotos: [],
			currentPage: 0,
			totalPage: 0,
		};
	default: return state;
	}
}
