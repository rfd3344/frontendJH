import React from 'react';

import './page.less';

import Header from './PageHeader';
import Footer from './PageFooter';

export default function PageTemplate() {
	return (
		<div id="page">
			<Header />
			<main className="alert-info">
				<h1> Template1 </h1>

			</main>
			<Footer />
		</div>
	);
}
