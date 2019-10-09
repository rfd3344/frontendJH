
import '@babel/polyfill';
import './env.js'; // eslint-disable-line

function Index1() {
	document.write('<h1>index.js is loaded</h1>');
}

export default Index1;
Index1();
