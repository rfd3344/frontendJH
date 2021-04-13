import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import ENV from '_src/../env.js';
import { logger, enableLogs } from '_utilis/logger';
import '_static/css/common.css';
import './style.scoped.css';
import PageTheme from '_src/themes/PageTheme';
import rootReducer from './reducers';
import rootSaga from './sagas';

// setup env.js
global.ENV = ENV;

// Check logger
if (ENV.DEBUG === true) {
	enableLogs(true);
	logger.log('logger is enabled');
}

// Redux initialze
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PageTheme />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
