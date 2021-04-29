import {
	STARWARS_GET_PEOPLE,
	STARWARS_LOADED_PEOPLE,
	STARWARS_GET_DETAILS,
	STARWARS_LOADED_DETAILS,
	STARWARS_LOADED_FAIL,
} from '@/constants/actionTypes';

export const getPeopleList = (pageNumber) => ({
	type: STARWARS_GET_PEOPLE,
	pageNumber,
});

export const loadedPeopleList = ({ count, peopleList, pageNumber }) => ({
	type: STARWARS_LOADED_PEOPLE,
	count,
	peopleList,
	pageNumber,
});


export const getPersonDetails = (url) => ({
	type: STARWARS_GET_DETAILS,
	url,
});

export const loadedPersonDetails = (personDetails) => ({
	type: STARWARS_LOADED_DETAILS,
	personDetails,
});


// triggered when axios is failed
export const loadedFail = (message) => ({
	type: STARWARS_LOADED_FAIL,
	message,
});
