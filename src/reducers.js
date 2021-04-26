
import { combineReducers } from 'redux';

import starWars from '_reducers/starWars';
import todos from '_reducers/todos';

export default combineReducers({
	starWars,
	todos,
});
