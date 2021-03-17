import React from 'react';
// import './page.less';

import Routers from './Routers';
// import Header from './PageHeader';
// import Footer from './PageFooter';

export default function PageTemplate() {
	return (
		<div id="page">

			<main className="container">
				<Routers />
			</main>
		</div>
	);
}
