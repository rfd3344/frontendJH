
/**
 * Transfer array to Enumeration.
 *
 * @param {array} arr
 * @returns {object} Returns read only enumeration
 * @since 1.0.0
 * @example
 *
 * arrayToEnum(['Enum1', 'Enum2'])
 * => {Enum1: 'Enum1', Enum2: 'Enum2'}
 */
export function arrayToEnum(arr) {
	const res = arr.reduce((obj, item) => {
		obj[item] = item; // eslint-disable-line no-param-reassign
		return obj;
	}, {});
	return Object.freeze(res);
}

/**
 * Counter the time of each item in array.
 *
 * @param {array} arr
 * @returns {object} Returns countered result
 * @since 1.0.0
 * @example
 *
 * timesCounter(['a', 'b', 'a', 1, 1])
 * => {_a: 2, _b: 1, _1: 2}
 */
export function timesCounter(arr) {
	return arr.reduce((res, item) => {
		if (res.hasOwnProperty(`_${item}`)) {
			res[`_${item}`]++;
		} else {
			res[`_${item}`] = 1;
		}
		return res;
	}, {});
}

/**
 * Counter the time of each item in array.
 *
 * @param {array} arr
 * @param {number} target: target value
 * @returns {number} the position of a target value
 * @since 1.0.0
 * @example
 *
 * binarySearch(0, 3, 5, 7, 9], 5) .
 * => 2
 */
export function binarySearch(arr, target) {
	let low = arr[0];
	let high = arr.length - 1;
	while (low <= high) {
		const mid = Math.floor((high + low) / 2);
		if (target === arr[mid]) return mid;
		if (target > arr[mid]) low = mid + 1;
		if (target < arr[mid]) high = mid - 1;
	}
	return -1;
}
