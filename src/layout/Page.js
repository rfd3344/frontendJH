import React from 'react';
import { Route } from 'react-router-dom';

import './page.less'
import Header from './Page_Header.js'
import Footer from './Page_Footer.js'
import Home from 'views/Home/index.js'
import Page1 from 'views/Page1/index.js'


export default class Template1 extends React.Component {
	render() {
		return (
			<div id="page">
				<Header />
				<main class="alert-info">
						<h1> Template1 </h1>
						<Route exact path="/" component={Home} />
						<Route exact path="/page1" component={Page1} />
				</main>
				<Footer />
			</div>
		)
	}
}
