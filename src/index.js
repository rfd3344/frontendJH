
import '@babel/polyfill';
import './env.js'; // eslint-disable-line

// console.warn( process.env )

function Index1() {
	document.write('<h1>index.js is loaded</h1>');
	document.write('<h1> second line 222   </h1>');
}

Index1();

export default Index1;
