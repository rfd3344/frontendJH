
/**
 * check the get method response.
 *
 * @param {object} res response for axios
 * @returns {object} Return the response data
 */
export function handleGetReponse(res) {
	if (res.status < 200 && res.status > 299) {
		throw new Error(`status: ${res.status}`);
	}
	return res.data;
}
