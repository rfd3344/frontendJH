
import { combineReducers } from 'redux';

import starWars from '@/reducers/starWars';
import websocketEcho from '@/reducers/websocketEcho';

export default combineReducers({
	starWars,
	websocketEcho
});
