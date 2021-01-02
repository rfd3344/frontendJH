import React from 'react';
import PropTypes from 'prop-types';
import './page.less';

import Header from './PageHeader';
import Footer from './PageFooter';

export default function PageTemplate(props) {
	const { children } = props;

	return (
		<div id="page" className="alert-info">
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</div>
	);
}

PageTemplate.propTypes = {
	children: PropTypes.element.isRequired,
};
