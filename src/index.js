
import '@babel/polyfill';
import './env.js'
import React from 'react';
import ReactDOM from 'react-dom';

var a= function(){
	console.warn(a)
}
console.warn( process)

ReactDOM.render(
	<h1> title 1111 </h1>,
	document.getElementById('root')
);
