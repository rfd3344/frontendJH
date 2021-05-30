
import { combineReducers } from 'redux';

import starWars from '@/reducers/starWars';
import socialCard from '@/reducers/socialCard';
import websocketEcho from '@/reducers/websocketEcho';

export default combineReducers({
  starWars,
  socialCard,
  websocketEcho,
});
