function getUrlPara() {
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

function setUrlPara(para = {}) {
	let res = '?';
	Object.keys(para).forEach((key) => {
		res = res.concat(`${key}=${para[key]}&`);
	});
	res = res.slice(0, -1);
	return res;
}

export {
	getUrlPara,
	setUrlPara,
};
