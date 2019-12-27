import { arrayToEnum } from '_helper/arrayHelper';

const ActionTypes = [
	'ADD_TODO',
	'TOGGLE_TODO',
	'FILTER_TODO',
	'OTHER_ACTION',
];

export default arrayToEnum(ActionTypes);
