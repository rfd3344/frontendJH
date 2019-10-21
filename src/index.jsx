import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.less';
import Routers from './routers';
import rootReducer from './reducers';

const store = createStore(rootReducer);

console.warn('Global variable debug:', debug); // eslint-disable-line


ReactDOM.render(
	<Provider store={store}>
		<Routers />
	</Provider>,
	document.getElementById('root'),
);
//
// ReactDOM.render(
// 	<div store={store}>
// 		<Routers />
// 	</div>,
// 	document.getElementById('root'),
// );
