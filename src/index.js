
import '@babel/polyfill';
import './env.js'; // eslint-disable-line

// console.warn(process);
// console.warn(VERSION);


function Index1() {
	document.write('<h1>index.js is loaded</h1>');
	document.write('<h1> second line 111  </h1>');
}

Index1();

export default Index1;
