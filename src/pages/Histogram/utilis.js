import { SVG_HEIGHT } from '@/constants/histogram';

/**
* @used  get each y-axis level height
* @param {number} maxYAxis
* @return {array}
*/
export const getYAxisSizes = (maxYAxis) => {
	const size = SVG_HEIGHT / maxYAxis;
	return Array.from(Array(maxYAxis)).map((item, index) => {
		return -(index + 1) * size;
	});
}


/**
* @used  calculate relative mouse moved based on svg position
* @param {object} e
* @param {object} svgInfo
* @return {object}
*/
export const getCursorPoint = (e, svgInfo) => {
	if(!svgInfo) return {};

	const svgPoint = svgInfo.svgPoint;
	const screenCTM = svgInfo.screenCTM;
	svgPoint.x = e.clientX;
	svgPoint.y = e.clientY;
	return svgPoint.matrixTransform(screenCTM);
}
