import _ from 'lodash';

/**
 * pick the required data for get people list query
 * @param {Object} data
 * @returns {Object} Returns the formated.
 */
export function pickPeopleList(people) {
	return {
		count: people.count,
		peopleList: people.results.map((item) => _.pick(item, ['name', 'height', 'mass', 'url'])),
	};
}

/**
 * pick the required data for get people list query
 * @param {Object} detail
 * @returns {Object} Returns the formated.
 */
export function pickPersonDetails(detail) {
	return _.pick(detail, ['name', 'height', 'gender', 'birth_year']);
}


/**
 * pick the required data for get people list query
 * @param {Object} films
 * @returns {Object} Returns the formated.
 */
export function pickFilmNames(films) {
	return films.map((item) => _.pick(item, ['title']));
}
