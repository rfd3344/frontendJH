/**
 * If value is undefined, set to null.
 *
 * @param {any} value
 * @returns {any} value or null if value is undefined
 */
export function setUndefinedToNull(value) {
	return typeof value !== 'undefined' ? value : null;
}
