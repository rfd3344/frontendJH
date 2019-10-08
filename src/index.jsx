
import '@babel/polyfill';
import './env.js'; // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';

console.warn(process); // eslint-disable-line

ReactDOM.render(
	<h1>title 222</h1>,
	document.getElementById('root'),
);
