
// triggered by
export const searchPeople = (pageNumber) => ({
	type: 'STARTWARS_SEARCH_PEOPEL',
	pageNumber,
});

// triggered by searchText action when axios loads data successful
export const loadedSuccess = (photosList) => ({
	type: 'STARTWARS_LOADED_SUCCESS',
	photosList,
});

// triggered by searchText action when axios is failed
export const loadedFail = (message) => ({
	type: 'STARTWARS_LOADED_FAIL',
	message,
});

// triggered when page is changed
// used in Pagination
export const changePage = (pageNumber) => ({
	type: 'STARTWARS_CHANGE_PAGE',
	pageNumber,
});

export const showPersonDetails = (id) => ({
	type: 'STARTWARS_PERSON_DETAILS',
	id,
});
