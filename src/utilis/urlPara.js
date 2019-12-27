export function getUrlPara() {
	const url = document.location.toString();
	const arrUrl = url.split('?');
	let para = arrUrl[1];
	if (!para) return null;
	const res = {};
	para = para.split('&');
	para.forEach((item) => {
		const temp = item.split('=');
		res[b] = temp[1]; // eslint-disable-line
	});
	return res;
}

/**
* @used  added parameters to url
* @param {string} url
* @param {object} para
* @return {string} new url with parameters
*/
export function setUrlPara(url = '', para = {}) {
	let res = `${url}?`;
	Object.keys(para).forEach((key) => {
		res = res.concat(`${key}=${para[key]}&`);
	});
	res = res.slice(0, -1);
	return res;
}
