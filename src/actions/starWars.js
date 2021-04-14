import ActionTypes from '_constants/ActionTypes';


// triggered by
export const searchPeople = (pageNumber) => ({
	type: ActionTypes.STARWARS_SEARCH_PEOPEL,
	pageNumber,
});

// triggered by searchText action when axios loads data successful
export const loadedSuccess = ({ count, peopleList, pageNumber }) => ({
	type: ActionTypes.STARWARS_LOADED_SUCCESS,
	count,
	peopleList,
	pageNumber,
});

// triggered by searchText action when axios is failed
export const loadedFail = (message) => ({
	type: ActionTypes.STARWARS_LOADED_FAIL,
	message,
});

export const showPersonDetails = (id) => ({
	type: ActionTypes.STARWARS_PERSON_DETAILS,
	id,
});
