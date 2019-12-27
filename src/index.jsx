import '@babel/polyfill';
// import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { logger, enableLogs } from '_utilis/logger';
import '_static/css/common.css';
import './style.less';
import Routers from './routers';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Initialization
// const env = dotenv.config();
// Check logger
if (typeof jhDebug !== 'undefined' && jhDebug === true) { // eslint-disable-line no-undef
	enableLogs(true);
	logger.log('logger is enabled');
}

//
// console.warn('process.env', process.env )
// console.warn('process.env',  env )
//

// Redux initialze
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Routers />
	</Provider>,
	document.getElementById('root'),
);
