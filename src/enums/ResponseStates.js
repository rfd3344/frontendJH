import { arrayToEnum } from '_helper/arrayHelper';

const ResponseStates = [
	'SUCCESS', // 200 - 299
	'CLIENT_ERROR', // 400 - 499
	'SERVER_ERROR', // 500 - 599
	'OTHER_ERROR',
];

export default arrayToEnum(ResponseStates);
