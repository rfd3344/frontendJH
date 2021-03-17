
import { combineReducers } from 'redux';
import { logger } from '_utilis/logger';

import todos from '_reducers/todos';
import photosSearch from '_reducers/photosSearch';
import ProductFilter from '_pages/Products/Redux';
import Quoridor from '_pages/Quoridor/Redux';

// lastAction reducer
function lastAction(state = null, action) { // eslint-disable-line no-unused-vars
	logger.log(`lastAction: ${state}`, ', newAction', action);
	return action.type;
}

export default combineReducers({
	lastAction,
	todos,
	photosSearch,
	ProductFilter,
	Quoridor,
});
