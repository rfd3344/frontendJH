import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Theme from '@/themes/Theme';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Redux initialze
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Theme />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
