
import React from 'react';

import './style.less';
import SearchBar from './SearchBar';
import QuantityPicker from './QuantityPicker';
import PhotosList from './PhotosList';
import Pagination from './Pagination';

export default function Home() {
	return (
		<section id="PhotoSearch">
			<h1>Maxamation Interview Code Challenge 2018</h1>
			<SearchBar />
			<QuantityPicker />
			<PhotosList />
			<Pagination />
		</section>
	);
}
