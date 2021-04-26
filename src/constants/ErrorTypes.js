import { arrayToEnum } from '_helper/arrayHelper';

const ErrorTypes = [
	'REFERENCE_ERROR',
	'OTHER_ERROR',
];

export default arrayToEnum(ErrorTypes);
