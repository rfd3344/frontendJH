import React from 'react';

import Routers from './Routers';
// import Header from './PageHeader';
// import Footer from './PageFooter';

export default function Theme() {
	return (
		<div id="page">
			<main className="container">
				<Routers />
			</main>
		</div>
	);
};