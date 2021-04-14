import _ from 'lodash';
/** TODOs do something
 * deeply go through all the props
 *
 * @param {Object} obj
 * @returns {Array} Returns the new mapped array.
 * @since 1.0.0
 * @example
 *
 * eg1:
 * let obj = { a:1, b:{ ba: 2, bb: { bba: 3, bbb: 4, bbc:{ bbca: 5}}}}
 * goThroughObj(obj) // 1 2 3 4 5
 */
export function formatQuaryData(data) {
	return {
		count: data.count,
		peopleList: data.results.map((item) => _.pick(item, ['name', 'height', 'mass'])),
	};
}
